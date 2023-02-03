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
      // 按送出會傳送到空陣列
      todos:[],
      // input 及時輸入的內容
      newTodo:'',
      // newItemHighPriority: false, 如果選項只有兩個可以設定成布林值
      newItemPriority: "low",
      // 勾選幾個就會自動 push into 矩陣
      iceCreamFlavors:[],
    }
  },
    methods:{
      saveItem(){
        this.items.push({id:this.items.length + 1, label: this.newItem})
        // 會清空在 input 的內容
        this.newItem = ""
            },
      doEdit(editing){
        this.editing = editing;
        this.newItem = ""
      },
      togglePurchased(item){
        item.purchased = !item.purchased;
    },
      // deleteItems(item){
      //   this.item.splice(this.items.indexOf(item),1);
      // }
  }
}).mount("#app");