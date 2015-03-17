Meteor.startup(
    function(){
        testTopics=topics.find().count();
        if(testTopics==null||testTopics==0){
            topics.insert({route:'createUser',label:'Create User Accounts',description:'Create user accounts and advanced options such as enabling accounts',icon:'user-plus'});
            topics.insert({route:'viewList',label:'Responsive List View',description:'A short demo of how to visualize items in a DB in a responsive way',icon:'th-list'});
            topics.insert({route:'createTopic',label:'Create Items in DB',description:'A basic introduction to inserting items into a meteor collection',icon:'database'})
        }
    }
)