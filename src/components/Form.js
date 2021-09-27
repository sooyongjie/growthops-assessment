import React from 'react'

function Form() {
    return (
        <div className="form-container container">
            <h1 className="big-fat-title">
                Register Your Interest
            </h1>
            <form action="none">
                <input type="text" id="input-name" name="name" placeholder="name" />
                <input type="email" id="input-email" name="email" placeholder="email" />
                <textarea id="input-message" name="message"></textarea>
                <select name="abc" id="input-occupation" value="Full-time Parents">
                    <option value="Full-time Parents">Full-time Parents</option>
                </select>
                <input type="tel" id="input-telephone" name="phone" placeholder="phone" />
                <button id="submit-form-btn">
                    <span>SUBMIT MESSAGE</span>
                </button>
            </form>
        </div>
    )
}

export default Form
