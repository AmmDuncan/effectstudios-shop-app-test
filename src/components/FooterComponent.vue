<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-group">
        <h3>Main Menu</h3>
        <ul>
          <li>Home</li>
          <li>T-shirts</li>
          <li>NBA</li>
          <li>Tracksuits</li>
          <li>Products Delivery • 1 – 2 days</li>
          <li>Contact</li>
          <li>Reviews</li>
        </ul>
      </div>
      <div class="footer-group">
        <h3>Secondary Menu</h3>
        <ul>
          <li>Search</li>
          <li>Privacy policy</li>
          <li>Shipping Policy</li>
          <li>Returns Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div class="footer-group">
        <h3>Subscribe</h3>
        <p>Subscribe to our mailing list to receive the latest news.</p>
        <div class="input-wrapper">
          <input type="email" placeholder="Email Address" name="" id="" />
          <button class="btn--icon">
            <SendIcon />
          </button>
        </div>
      </div>
      <div class="footer-group">
        <h3>Follow Us</h3>
        <div class="socials">
          <div class="social">
            <FacebookIcon />
          </div>
          <div class="social">
            <TwitterIcon />
          </div>
          <div class="social">
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-stack">
      <div class="container">
        <div class="copyright">
          © {{ new Date().getFullYear() }} Jambulani • All rights reserved
        </div>

        <div class="companies">
          <img src="@/assets/companies-logos.png" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SendIcon from "@/components/icons/SendIcon.vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";

export default {
  name: "FooterComponent",
  components: { InstagramIcon, TwitterIcon, FacebookIcon, SendIcon },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #f5f5f6;
  padding-block-start: 4rem;
  margin-top: 8rem;

  @media (min-width: 992px) {
    padding-block-start: 8rem;
  }

  & > .container {
    display: grid;
    grid: auto-flow max-content / 1fr;
    gap: 4rem;

    @media (min-width: 768px) {
      grid: auto-flow max-content / 1fr 1fr;
    }

    @media (min-width: 992px) {
      grid: auto-flow max-content / repeat(4, 1fr);
      justify-content: space-between;
      gap: 4.8rem;
    }
  }

  ul {
    display: grid;
    grid: auto-flow / 1fr;
    gap: 1.6rem;
    list-style: none;
    padding: 0;
  }
}

h3 {
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 2.4rem;
}

p,
li {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

p {
  max-width: 24rem;
}

.input-wrapper {
  display: grid;
  grid: 1fr / auto 4.8rem;
  height: 4rem;
  width: 100%;
  max-width: 28rem;
  align-items: stretch;
  margin-top: 2rem;

  input {
    padding: 8px 16px;
    border: 1px solid #eaeaec;
  }
}

.socials {
  width: max-content;
  display: grid;
  grid: 3.2rem / auto-flow 1fr;
  gap: 8px;
  justify-content: flex-start;

  .social {
    width: 3.2rem;
    display: grid;
    place-content: center;
    background: black;
    color: #fff;

    svg {
      transform: scale(1.5);
    }
  }
}

.bottom-stack {
  margin-top: 4rem;
  @media (min-width: 768px) {
    border-top: 1px solid #eaeaec;
  }

  & .container {
    display: flex;
    flex-flow: column-reverse;

    @media (min-width: 768px) {
      height: 8rem;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .companies {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .copyright {
    height: 6.4rem;
    display: flex;
    align-items: center;
    border-top: 1px solid #eaeaec;

    @media (min-width: 768px) {
      border: none;
    }
  }

  @media (min-width: 992px) {
    margin-top: 11rem;
  }
}

.btn--icon {
  display: grid;
  place-content: center;
  border: none;
  background: var(--yellow);
  color: black;
}
</style>
