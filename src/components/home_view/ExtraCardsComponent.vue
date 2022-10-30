<template>
  <div class="container">
    <div class="extra-cards-root">
      <div class="extra-card">
        <div class="image">
          <img src="@/assets/personalization.png" alt="" />
          <div class="overlay"></div>
        </div>
        <h3>Personalization</h3>
        <p>
          Put a custom print on the football shirt of your choice with our
          Personalization service.
        </p>
        <p>Tell us what name, what number and we put it. FREE!!!</p>
      </div>

      <div class="extra-card">
        <div class="image">
          <img src="@/assets/social_networks.png" alt="" />
          <div class="overlay"></div>
        </div>
        <h3>Social networks</h3>
        <p>Share your shirts with us with the #CamisetasFutbolSpainnn</p>
        <div class="socials">
          <div class="social"><FacebookIcon /></div>
          <div class="social"><TwitterIcon /></div>
          <div class="social"><InstagramIcon /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
export default {
  name: "ExtraCardsComponent",
  components: { PhoneIcon, InstagramIcon, TwitterIcon, FacebookIcon },
};
</script>

<style lang="scss" scoped>
.extra-cards-root {
  display: grid;
  grid: auto-flow 25rem / 1fr;
  gap: 2rem;
  margin-top: 8rem;
  color: white;

  @media (min-width: 992px) {
    margin-top: 12rem;
    grid: auto-flow 40rem/ 1fr 1fr;
    gap: 4rem;
  }

  .extra-card {
    padding: 2.4rem;

    display: grid;
    grid: auto-flow max-content / 1fr;
    align-content: flex-end;
    gap: 1.3rem;

    cursor: pointer;

    @media (min-width: 992px) {
      padding: 4rem;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.02em;
      @media (768px) {
        font-size: 16px;
        line-height: 24px;
      }
    }

    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
      letter-spacing: -0.02em;
      text-transform: uppercase;
    }

    .socials {
      display: grid;
      grid: 1fr / auto-flow max-content;
      gap: 4px;
    }

    .social {
      --size: 2rem;
      width: var(--size);
      height: var(--size);
      display: grid;
      place-content: center;
      background-color: #fff;
      color: #111112;

      @media (min-width: 992px) {
        --size: 3.2rem;

        svg {
          transform: scale(1.45);
        }
      }
    }
  }

  .image {
    position: absolute;
    inset: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.65);
    }
  }
}
</style>
