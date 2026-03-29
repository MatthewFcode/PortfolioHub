// import { useState, useRef } from 'react'
// import Lottie, { LottieRefCurrentProps } from 'lottie-react'
// import AlfredoAnimation from '../../src/animations/chatbot.json'

// function Alfredo() {
//   const [promptState, setPromptState] = useState('')
//   const [reply, setReply] = useState('')

//   const lottieRef = useRef<LottieRefCurrentProps | null>(null)

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()

//     const res = await fetch('/api/v1/alfredo', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ prompt }), // posts the prompt to the API route which returns a stream
//     })

//     let done = false
//     //const fullResponse = ''

//     const reader = res.body?.getReader() // readable stream | getReader() lets us manually read chunks from a stream
//     const decoder = new TextDecoder() // turns the binary chunks back into readable strings

//     while (!done) {
//       // loop until the stream is finished
//       const { value, done: doneReading } = await reader!.read() // value is the next chunk of the text
//       done = doneReading
//       if (value) {
//         // if the next chunk is real
//         const chunk = decoder.decode(value) // turn into readable string
//         // fullResponse += chunk // append it to full response
//         setReply((prev) => prev + chunk) // updates the react state in real time chunk by chunk
//         //await new Promise((r) => setTimeout(r, 5)) // tiny delay in this process to smoothen rendering
//       }
//     }
//   }
//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="Alfredo">Ask Alfredo about Matthew ❗</label>
//           <input
//             type="text"
//             value={promptState}
//             onChange={(e) => setPromptState(e.target.value)}
//             placeholder="...what has Matthew been working on?"
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <div>
//         <Lottie
//           lottieRef={lottieRef}
//           animationData={AlfredoAnimation}
//           loop
//           autoplay={false}
//         />
//         <p>{reply}</p>
//       </div>
//     </>
//   )
// }

// export default Alfredo

import { useState, useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import AlfredoAnimation from '../../src/animations/chatbot.json'

function Alfredo() {
  const [promptState, setPromptState] = useState('')
  const [reply, setReply] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const lottieRef = useRef<LottieRefCurrentProps | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!promptState.trim()) return // is there is nothing in the prompt

    setReply('')
    setIsLoading(true)

    // start animation when user submits
    lottieRef.current?.play()

    const res = await fetch('/api/v1/alfredo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: promptState }),
    })

    let done = false
    const reader = res.body?.getReader()
    const decoder = new TextDecoder()

    while (!done) {
      const { value, done: doneReading } = await reader!.read()
      done = doneReading
      if (value) {
        const chunk = decoder.decode(value)
        setReply((prev) => prev + chunk)
      }
    }

    // stop animation once response is complete
    lottieRef.current?.stop()
    setIsLoading(false)
  }

  const handleSpeak = (text: string) => {
    //speak function
    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
  }

  return (
    <div className="alfredo-wrapper">
      {/* Label + Input */}
      <form onSubmit={handleSubmit} className="alfredo-form">
        <label htmlFor="alfredo-input" className="about-panel-title">
          Ask Alfredo about Matthew ❗
        </label>
        <div className="alfredo-input-row">
          <input
            id="alfredo-input"
            type="text"
            value={promptState}
            onChange={(e) => setPromptState(e.target.value)}
            placeholder="...what has Matthew been working on?"
            className="alfredo-input"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="about-submit-btn alfredo-submit"
            disabled={isLoading || !promptState.trim()}
          >
            {isLoading ? '...' : '▶'}
          </button>
        </div>
      </form>

      {/* Animation OR Response */}
      <div className="alfredo-response-area">
        {/* Animation — shown when no reply yet */}
        <div
          className="alfredo-lottie-wrap"
          style={{ display: reply ? 'none' : 'flex' }}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={AlfredoAnimation}
            loop
            autoplay={false}
            style={{ width: '100%', maxWidth: '160px' }}
          />
        </div>

        {/* Response box — shown once we have a reply */}
        {reply && (
          <div className="alfredo-reply-box">
            <p className="alfredo-reply-text">{reply}</p>
            <button
              type="button"
              className="alfredo-audio-btn"
              onClick={() => handleSpeak(reply)}
              title={isSpeaking ? 'Stop speaking' : 'Read aloud'}
            >
              {isSpeaking ? '⏹ Stop' : '🔊 Listen'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Alfredo
