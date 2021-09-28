import React from 'react'

function Form() {
    return (
        <div className="form-container container">
            <h1 className="big-fat-title">
                Register Your Interest
            </h1>
            <form action="https://formspree.io/f/mknkewbv" method="post">
                <input type="text" id="input-name" name="name" placeholder="Name" required="required" />
                <input type="email" id="input-email" name="email" placeholder="Email" required="required" />
                <textarea id="input-message" name="message" placeholder="Message" required="required"></textarea>
                <select name="abc" id="input-occupation" value="Full-time Parents" required="required">
                    <option value="Full-time Parents">Full-time Parents</option>
                    <option value="Full-time Parents">Part-time Parents</option>
                    <option value="Full-time Parents">Singe Dad</option>
                    <option value="Full-time Parents">Singe Mom</option>
                    <option value="Full-time Parents">No</option>
                </select>
                <input type="telnum" id="input-telephone" name="phone" placeholder="Phone" required="required" />
                <button id="submit-form-btn" type="submit">
                    <span>SUBMIT MESSAGE</span>
                </button>
            </form>
        </div>
    )
}

export default Form
