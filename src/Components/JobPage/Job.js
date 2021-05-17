import React from "react";
import "./Job.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
function Job() {
  return (
    <div className="job">
      <div className="job__container">
        <div className="job__poster">
          <img src="https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
          <h1>We will find your perfect carrer no matter what</h1>
          <p>
            We only employ the best in the business and in doing so offers
            client an unparralled lwevel of exprentise service.
          </p>
        </div>
        <div className="job__inputs">
          <div className="job__input">
            <input className="FullName" type="text" required="required" />
            <span>Full Name</span>
          </div>
          <div className="job__input">
            <input className="FullName" type="text" required="required" />
            <span>E-Mail</span>
          </div>
          <div className="job__input">
            <input className="FullName" type="text" required="required" />
            <span>Contact No</span>
          </div>
          <div className="job__input">
            <input className="FullName" type="text" required="required" />
            <span>Location</span>
          </div>
          <Button>Submit</Button>
        </div>
      </div>
      <div className="job__container2">
        <div className="job__about">
          <div className="job__aboutText">
            <h2>
              This article includes a list of general references, but it remains
              largely unverified because it lacks sufficient corresponding
              inline citations.
            </h2>
            <p>
              Most people spend up to forty or more hours each week in paid
              employment. Some exceptions are children, retirees, and people
              with disabilities; however, within these groups, many will work
              part-time, volunteer, or work as a homemaker. From the age of 5 or
              so, many children's primary role in society (and therefore their
              "job") is to learn and study as a student.
            </p>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little .
            </p>
          </div>
          <div className="job__aboutImage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqfVfWjTejGf96nFg2hQHFIsGuyuUigsjlUNSYOk-4l15eiy8N86rgaQhZC3iR5igGKw&usqp=CAU" />
          </div>
        </div>
      </div>
      <div className="job__container3">
        <di className="job__containerImages">
          <div className="job__containerImage1">
            <h1>What do you want to acchive in your career this year?</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
            </p>
          </div>
          <div className="job__containerImage2">
            {/* <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/01/11140027/send-email-1024x512.png" /> */}
            <h1>What do you want to acchive in your career this year?</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
            </p>
          </div>
        </di>
      </div>
      <div className="job__container3">
        <div className="job__imageContainer3">
          {" "}
          <h1>What do you want to acchive in your career this year?</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
          </p>
        </div>
        <div className="job__imageContainer4">
          {" "}
          <h1>What do you want to acchive in your career this year?</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
          </p>
        </div>
      </div>
      <div className="job__details">
        <h1>
          One of the leading job placement and recruiting firm in Australia in
          the past 25 years{" "}
        </h1>
      </div>
      <div className="job__footer">
        <div className="jon__footerleft">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little .
          </p>
        </div>
        <div className="join__footerRight">
          <div className="job__found">
            <p>Jobs</p>
            <h1>35K</h1>
          </div>
          <div className="job__found">
            <p>Clients</p>
            <h1>234</h1>
          </div>
          <div className="job__found">
            <p>Salaries </p>
            <h1>10m</h1>
          </div>
        </div>
      </div>
      <div className="job__footer-Poster">
        <h2>
          Stormie attributes his success in multiple performance-based
          industries on the belief that he was committed to providing
          significantly more value to his employers and customers than anyone
          else in the field
        </h2>
        <p>
          {" "}
          Stormie attributes his success in multiple performance-based
          industries on the belief that he was committed to providing
          significantly more value to his employers and customers than anyone
          else in the field
        </p>
      </div>
    </div>
  );
}

export default Job;
