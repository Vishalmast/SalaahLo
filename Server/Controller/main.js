

export const main = (request, response) => {
 try {
    return response.status(200).json(`Hello World!!`);
 } catch (error) {
    response.json('Error: ', error.message);
 }
}