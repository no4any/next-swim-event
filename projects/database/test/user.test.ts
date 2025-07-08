import { userAdd } from "../src/operations/user/userAdd.function"
import { userDelete } from "../src/operations/user/userDelete.function";
import { userGet } from "../src/operations/user/userGet.function";
import { userUpdatePassword } from "../src/operations/user/userUpdatePassword.function";
import { userValidate } from "../src/operations/user/userValidate.function";

const TEST_MAIL_1 = "hans@test.de";
const TEST_MAIL_2 = "jane@doe.de";
const TEST_MAIL_3 = "john@doe.de";
const PASSWORD_ORIGINAL = "asdf";
const PASSWORD_NEW = "1234";

describe("User tests", () => {
    test("userAdd and userGet", async () => {
        await userAdd({ mail: TEST_MAIL_1, password: PASSWORD_ORIGINAL, roll: "ADMIN" });
        const user = await userGet(TEST_MAIL_1);
        expect(user?.mail).toEqual(TEST_MAIL_1);
    });

    test("userAdd and userDelete", async () => {
        await userAdd({ mail: TEST_MAIL_2, password: "asdf", roll: "ADMIN" });
        const result = await userDelete(TEST_MAIL_2);
        expect(result.changes).toEqual(1);
    });

    test("Validate user after password change", async () => {
        await userAdd({ mail: TEST_MAIL_3, password: PASSWORD_ORIGINAL, roll: "ADMIN" });
        await userUpdatePassword(TEST_MAIL_3, PASSWORD_NEW);
        const user = await userValidate(TEST_MAIL_3, PASSWORD_NEW);
        expect(user?.mail).toEqual(TEST_MAIL_3);
    });
})