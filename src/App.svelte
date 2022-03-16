<script lang="ts">
  // import { store } from "./store";
  import Notesbar from "./components/Notesbar.svelte";
  import Contentsbar from "./components/Contentsbar.svelte";
  // if (!localStorage.isVisited) {
  //   localStorage.isVisited = true;
  //   localStorage.setItem("store", JSON.stringify($store));
  // } else {
  //   $store = JSON.parse(localStorage.getItem("store"));
  // }
  let label: string = "All";
  function handleTap(event: any) {
    label = event.detail.label;
  }
</script>

<main>
  <header>
    <h1>To Note</h1>
  </header>
  <section>
    <Notesbar on:tap={handleTap} />
    <Contentsbar {label} />
  </section>
  <aside>
    <i class="fas fa-plus" />
  </aside>
</main>

<style lang="scss">
  @import "./scss/theme.scss";
  main {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    header {
      height: 80px;
      background: $secondary-color;
      color: $secondary-text-color;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 1rem;
      h1 {
        font-weight: 900;
      }
    }
    section {
      display: flex;
      flex-direction: row;
    }
    aside {
      position: absolute;
      inset: auto 4rem 4rem auto;
      background: $secondary-color;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      i {
        color: $primary-accent-color;
        font-size: 1.5rem;
      }
    }
  }
</style>
