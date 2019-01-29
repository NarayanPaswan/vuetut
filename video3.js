var myapp=new Vue({
el:"#my-app",
data:{
    name:"Online web tutor",
    playlist:"VueJs",
},
methods:{
    run: function(message,name){
        return "I am running"+message+ " Name:"+name;
    },
    welcome: function(dayTime){
        return " Good "+dayTime;
    },
    valueAccess: function(){
        return this.name+" "+this.playlist;
    }
}
});