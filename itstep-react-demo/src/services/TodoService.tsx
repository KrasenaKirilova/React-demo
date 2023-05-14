const getAllTodos = () => {

   const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
   //const baseUrl = 'https://jsonplaceholder.typicode.com/photos';

    return  fetch(baseUrl)
            .then(responce => responce.json())
            .catch(error => console.log(error))
            .finally(() => console.log('DONE'))
   
}

 export const todosService = {
    getAllTodos
}