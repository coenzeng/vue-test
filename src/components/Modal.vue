<template>
    <div class="backdrop" @click.self="closeModal"><!--click.self means only this div, NOT any of the child elements inside the div-->
        <div class="modal" :class="{ sale:theme === 'sale'}">
            <slot>default content</slot><!--slot will insert everything that was passed in between the tags from the parent component-->
            <!-- if nothing is passed through slots, "default content will show"-->
            <slot name="links"></slot>        
        </div>
    </div>
</template>


<script> 

export default {
    props: ['theme' ],
    methods: {
        closeModal(){//closeModal is called whena user clicks on the backdrop div
            this.$emit('close')
            //emit is a function that sends a signal to the parent component
            //in the parent component, @close calls toggleModalm, which closes the Modal
            
        }
    }

}
</script>

<style>

  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
  }

</style>