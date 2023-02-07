// const httpMessage = require("../messages/httpMessage");

// class response {
//     static validation(res, errors) {
//         return res.status(422).json({
//             message: httpMessage.validation(),
//             errors: errors,
//         });
//     }
//     static creation(res, result, name) {
//         return res.status(201).json({
//             message: httpMessage.create(name),
//             result: result,
//         });
//     }
//     static server(res, errors) {
//         return res.status(500).json({
//             message: httpMessage.server(),
//             errors: errors,
//         });
//     }
//     static fetch(res, result) {
//         return res.status(200).json({
//             message: httpMessage.fetch(),
//             result: result,
//         });
//     }
// }

// module.exports = response;
