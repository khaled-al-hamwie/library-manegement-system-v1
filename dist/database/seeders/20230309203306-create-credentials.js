"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkInsert("Credential", [
                {
                    credential_id: 2,
                    email: "test@test.com",
                    password: "$2a$12$i4I28Uchw1s1vwTzzbgrLOLB5BHSxT/OlX.gsHeFmi3Jci.lgIDpG",
                    tokens: '["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjc4Mzk0NTAwfQ.izJut-v-P7MsAjo4ttlu3CZEEY50ljmwDXrJxX--FfU"]',
                    isAdmin: 1,
                },
            ]);
        });
    },
    // await RegisterController.register("test@test.com", "12312121212121212345", true);
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            return queryInterface.bulkDelete("Credential", {
                credential_id: 2,
            });
        });
    },
};
