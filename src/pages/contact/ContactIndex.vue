<template>
  <the-container>
    <form action="#">
      <div class="form grid">
        <heading-primary class="heading"> Contact us </heading-primary>
        <div class="chef-img">
          <div class="img-container">
            <img src="../../assets/otherImg/chef.png" alt="chef Image" />
          </div>
        </div>
        <div class="first--col">
          <label for="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name..."
          />
          <label for="sub">subject</label>
          <input
            type="text"
            name="subject"
            id="sub"
            placeholder="Enter subject..."
          />
        </div>
        <div class="second--col">
          <label for="email">email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address..."
          />
          <label for="enquiryType">Enquiry Type</label>
          <select id="enquiryType" name="enquiryType" required>
            <option value="" disabled selected>Select an enquiry type</option>
            <option value="general">General Question</option>
            <option value="order">Order Related</option>
            <option value="reservation">Table Reservation</option>
            <option value="catering">Catering Services</option>
            <option value="feedback">Feedback / Complaint</option>
            <option value="partnership">Partnership / Business Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="message">
          <label for="msg">Messages </label>
          <textarea
            name="Message"
            id="msg"
            placeholder="Enter your messages..."
          ></textarea>
        </div>
        <button class="submit-btn" type="submit">Submit</button>
      </div>
    </form>
  </the-container>
</template>

<!-- 
<script>
import HeadingPrimary from "../../ui/HeadingPrimary.vue";
export default {
  components: { HeadingPrimary },
};
</script>
 -->

<style scoped>
.form {
  margin-top: 8.4rem;
}
.grid {
  display: grid;
  column-gap: 4rem;
  justify-self: center;
  grid-template-columns: repeat(3, 1fr);
}
.heading {
  grid-column: 1/-1;
  grid-row: 1/2;
  margin-bottom: 8rem;
  text-align: center;
}
.chef-img {
  grid-row: 2 / 4;
  align-self: center;
}
/* col--1 */
.img-container {
  width: 40rem;
  height: 43rem;
  display: flex;
  justify-content: center;
  border-radius: 3rem;
  background-image: linear-gradient(to bottom, #fff, #e7f9fd);
  position: relative;
}
img {
  position: absolute;
  bottom: 0%;
  justify-self: center;
  width: 35rem;
}

/* col--2 */
.second--col,
.first--col {
  display: flex;
  flex-direction: column;
}
label {
  text-transform: uppercase;
  font-size: 1.4rem;
  /* 1.4 of 8% = .14 * .8 =  */
  letter-spacing: 0.112rem; /* 8% */
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1.2rem;
}
textarea,
select,
input {
  font-family: "Inter", sans-serif;
  border-radius: 16px;
  height: 6rem;
  width: 40rem;
  border-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 2.4rem;
  padding: 1.8rem 2rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.4rem;
}
textarea {
  margin-bottom: 0;
  height: 20rem;
  width: 84rem;
  resize: none;
}
.message {
  display: flex;
  flex-direction: column;
  grid-row: 3/4;
  grid-column: 2/-1;
}
.submit-btn {
  background-color: #000;
  grid-column: 2 / 3;
  border: none;
  width: 18rem;
  height: 6.4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: #fff;
  margin-top: 4.8rem;
  border-radius: 1.6rem;
}

option:checked,
option:focus {
  font-weight: bold;
  background-color: #f0f0f0;
}
</style>
