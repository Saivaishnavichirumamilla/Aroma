const ContactUs = () => {
  return (
    <div className="contactUs-container">
      <div className="contactUs-coverpic">
        <img src="https://plus.unsplash.com/premium_photo-1730973705195-d9d6b9c26028?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9udXRzJTIwYW5kJTIwZGVzc2VydHN8ZW58MHx8MHx8fDA%3D"></img>
        <div>We would love to hear from you</div>
      </div>

      <form className="contactUs-form">
        <div className="entry1">
          <select>
            <option>How can we help you?</option>
            <option>I need help with my online order</option>
            <option>I would like to give feedback/suggestions</option>
            <option>
              I found incorrect or outdated information on a page.
            </option>
            <option>Other</option>
          </select>
        </div>

        <div className="entry">
          <input type="text" placeholder="Full Name" required />
        </div>
        <div className="entry">
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="entry">
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="entry">
          <input type="text" placeholder="Type Text" required />
        </div>

        <button className="feedback-btn">Submit Feedback</button>
      </form>
    </div>
  );
};

export default ContactUs;
