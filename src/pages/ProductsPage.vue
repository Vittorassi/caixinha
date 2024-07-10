<template lang="">
  <div class="products-main">
    <p class="title-page">Produtos</p>

    <div class="products-nav-menu">
      <span
        v-for="(item, index) in navMenuItems"
        :key="index"
        class="menu-item"
        :class="{ active: item.value === activeMenu }"
        @click="changeActiveMenu(item.value)"
        >{{ item.label }}</span
      >
    </div>

    <div class="section-actions">
      <!--@click="openProductAddDialog()-->
      <div class="add-new" @click="openDialog()">
        <q-icon name="add" color="white" />
      </div>
    </div>

    <div class="add-product-dialog-wrap">
      <ProductAddDialog ref="myDialog" />
    </div>

    <div class="prods-table">
      {{ LocalStorage.getItem("products") }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { LocalStorage } from "quasar";
import ProductAddDialog from "src/components/ProductAddDialog.vue";

const navMenuItems = [
  {
    label: "Itens",
    value: "items",
  },
  {
    label: "Etiquetas",
    value: "tags",
  },
];

export default defineComponent({
  name: "ProductsPage",

  components: {
    ProductAddDialog,
  },

  setup() {
    const activeMenu = ref("items");
    const myDialog = ref();

    function openDialog() {
      myDialog.value.open();
    }

    return {
      navMenuItems,
      activeMenu,
      myDialog,
      LocalStorage,

      openDialog,

      changeActiveMenu(menu) {
        activeMenu.value = menu;
      },

      onDialogHide() {
        console.log("fechou");
      },
    };
  },
});
</script>

<style lang="scss">
.products-main {
  & .title-page {
    margin: 0;
    font-size: 2rem;
    padding: 0.5rem 1rem;
  }

  & .products-nav-menu {
    padding: 1rem;
    display: flex;
    gap: 1rem;

    & .menu-item {
      cursor: pointer;
      position: relative;
      font-size: 1rem;

      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background: var(--q-primary);
        position: absolute;
        bottom: -2px;
        left: 0;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }

      &.active {
        &::after {
          transform: scaleX(1);
        }
      }
    }
  }

  & .section-actions {
    padding: 0.5rem 1rem;
    display: flex;

    & .add-new {
      padding: 0.5rem;
      background: var(--q-primary);
      border-radius: 20px;
      height: 2.5rem;
      width: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      cursor: pointer;
      transition: 250ms ease-in-out;

      &:hover {
        background: var(--q-info);
        transition: 250ms ease-in-out;
      }
    }
  }
}
</style>
