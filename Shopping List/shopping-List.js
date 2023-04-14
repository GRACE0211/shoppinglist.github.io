const app = Vue.createApp({
  data(){
    return {
      header: "Shopping List App",
      editing:true,
      newItem:"",
      items:[
        {id: 1, label: "10 party hats", purchased: true},
        {id: 2, label: "2 board games", purchased: true},
        {id: 3, label: "20 cups", purchased: false}
      ],
      trashCan:false
    }
  },
    methods:{
      saveItem(){
        if(this.newItem.trim() === ''){
          alert('輸入值不得為空！');
          this.newItem = "";
          return;
        }
        else{
          this.items.push({id:this.items.length + 1, label: this.newItem})
          // 會清空在 input 的內容
          this.newItem = "";
        }
            },
      doEdit(editing){
        this.editing = editing;
        this.newItem = ""
      },
      togglePurchased(item){
        item.purchased = !item.purchased;
      },
      deleteItems(item){
        this.items.splice(this.items.indexOf(item),1);
      }
  }
}).mount("#app");
