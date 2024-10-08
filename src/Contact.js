import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2669744098853!2d73.91148227479248!3d18.56199878253962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1a9d17181d1%3A0xa43b5ca862fdefd7!2sSolitaire%20Business%20Hub%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1693308230915!5m2!1sen!2sin" width="100%" title="hi" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  
  
  <div className="container">
<div className="contact-form">
  <form action="https://formspree.io/f/mvojajjq" method="POST" className="contact-inputs">
   
<input type="text" placeholder="username" name="username" required autoComplete="off" />
<input type="email" name="Email" placeholder="Email" autoComplete="off" required />
<textarea  name="Message" placeholder="Enter your message" cols={"30"} autoComplete="off" ></textarea>
  <input type="submit" value={"Submit"} />
  </form>
</div>
  </div>
  
  </Wrapper>;
};

export default Contact;
