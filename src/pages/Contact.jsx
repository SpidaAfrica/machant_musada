import React from 'react'
export default function Contact(){
  const [status, setStatus] = React.useState({type:'', message:''})
  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({type:'', message:''})
    const form = new FormData(e.currentTarget)
    try {
      const res = await fetch('api.jbuit.org/backend/contact.php', { method: 'POST', body: form })
      const data = await res.json()
      if (data.success) setStatus({type:'success', message: data.message || 'Message sent!'})
      else setStatus({type:'error', message: data.error || 'Failed to send'})
      e.currentTarget.reset()
    } catch (e) {
      setStatus({type:'error', message: 'Network error'})
    }
  }
  return (
    <section className="container section">
      <div className="kicker">Contact</div>
      <h2>Let’s talk</h2>
      <form className="form card" onSubmit={onSubmit}>
        <label className="label">Name<input className="input" name="name" required placeholder="Your name" /></label>
        <label className="label">Email<input className="input" name="email" type="email" required placeholder="you@example.com" /></label>
        <label className="label">Subject<input className="input" name="subject" required placeholder="Subject" /></label>
        <label className="label">Message<textarea className="textarea" name="message" required rows="6" placeholder="How can we help?"></textarea></label>
        <button className="btn" type="submit">Send message</button>
        {status.message ? <div className="small" style={{marginTop:8}}>{status.message}</div> : null}
      </form>
    </section>
  )
}
