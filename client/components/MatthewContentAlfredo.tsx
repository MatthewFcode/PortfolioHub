import { useState } from 'react'

function Alfredo() {
  const [promptState, setPromptState] = useState('')
  const [reply, setReply] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const res = await fetch('/api/v1/alfredo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }), // posts the prompt to the API route which returns a stream
    })

    let done = false
    //const fullResponse = ''

    const reader = res.body?.getReader() // readable stream | getReader() lets us manually read chunks from a stream
    const decoder = new TextDecoder() // turns the binary chunks back into readable strings

    while (!done) {
      // loop until the stream is finished
      const { value, done: doneReading } = await reader!.read() // value is the next chunk of the text
      done = doneReading
      if (value) {
        // if the next chunk is real
        const chunk = decoder.decode(value) // turn into readable string
        // fullResponse += chunk // append it to full response
        setReply((prev) => prev + chunk) // updates the react state in real time chunk by chunk
        //await new Promise((r) => setTimeout(r, 5)) // tiny delay in this process to smoothen rendering
      }
    }
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Alfredo">Ask Alfredo about Matthew ❗</label>
          <input
            type="text"
            value={promptState}
            onChange={(e) => setPromptState(e.target.value)}
            placeholder="...what has Matthew been working on?"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>{reply}</p>
      </div>
    </>
  )
}

export default Alfredo
