<template>
  <q-dialog v-model="show" class="product-add">
    <div class="product-add-wrap">
      <p class="title">Adicionar Produto</p>
      <div class="close" @click="close()">X</div>

      <div class="product-form">
        <q-input filled v-model="productName" label="Nome" />
        <q-input
          filled
          v-model.number="productPrice"
          type="number"
          label="Preço"
        />
        <q-input
          filled
          v-model.number="productCode"
          type="number"
          label="Código"
        />
      </div>

      <q-btn
        class="close-btn"
        color="primary"
        label="Adicionar"
        @click="submitProduct()"
      />
    </div>
  </q-dialog>
</template>

<script>
import { LocalStorage } from "quasar";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "ProductAddDialog",

  setup(props, context) {
    const show = ref(false);

    let productName = ref("");
    let productPrice = ref();
    let productCode = ref();

    function open() {
      show.value = true;
    }

    function close() {
      show.value = false;
    }

    function submitProduct() {
      const product = {
        name: productName.value,
        price: productPrice.value,
        code: productCode.value,
      };

      if (!LocalStorage.getItem("products")) {
        LocalStorage.set("products", []);
      }

      const prods = LocalStorage.getItem("products");

      prods.push(product);

      LocalStorage.set("products", prods);
    }

    context.expose({ open, close });

    return {
      show,
      productName,
      productPrice,
      productCode,
      open,
      close,
      submitProduct,
    };
  },
});
</script>

<style lang="scss">
.product-add {
  & .product-add-wrap {
    width: 32rem;
    background-color: #ededed;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .title {
      color: white;
      padding: 1rem 0;
      font-size: 1.5rem;
      text-align: center;
      margin: 0;
      background-color: var(--q-primary);
    }

    & .close {
      color: white;
      border-radius: 20px;
      font-size: 1rem;
      position: absolute;
      width: 2rem;
      height: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 5px;
      right: 5px;
      cursor: pointer;
      transition: 250ms ease-in-out;

      &:hover {
        transition: 250ms ease-in-out;
        background-color: #45a2ff;
      }
    }

    & .close-btn {
      margin: 1rem 2rem;
    }

    & .product-form {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
}
</style>
