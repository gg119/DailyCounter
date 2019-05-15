exports.handler = async (event, context) => {
    const response = {
        statusCode: 200,
        body: "20",
    }
    return JSON.stringify(response);
}