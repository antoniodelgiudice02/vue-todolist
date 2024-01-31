const { createApp } = Vue

createApp({
    data() {

        return {
            tasks: [
                {
                    text: 'task 1',
                    done: true,
                },
                {
                    text: 'task 2',
                    done: false,
                },
                {
                    text: 'task 3',
                    done: true,
                },
                {
                    text: 'task 4',
                    done: false,
                },
                {
                    text: 'task 5',
                    done: true,
                }
            ],

            newTask: {
                text: '',
                done: false
            }
        }

    },

    methods:{
        deleteTask(i){
            this.tasks.splice(i, 1)
        },

        addTask(){
            const newTaskCopy = {...this.newTask}
            this.tasks.push(newTaskCopy)
        },

    }

}).mount('#app')