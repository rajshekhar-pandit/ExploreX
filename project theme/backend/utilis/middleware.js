import jwt from "jsonwebtoken"
import userSchema from "../model/userModel.js"

export const middleware = async (req, res, next) => {
    try {
        const secretKey = process.env.JWTSECRETKEY

        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                status: 401,
                message: "There is no token, insert token first",
                body: {}
            })
        } else {
            const token = authHeader.split(" ")[1]
            const tokenInfo = jwt.verify(token, secretKey)
            const user = await userSchema.findById({ _id: tokenInfo.id })

            if (!user) {
                return res.status(401).json({
                    success: false,
                    status: 401,
                    message: "Invalid token",
                    body: {}
                })
            }

            if (tokenInfo.iat === user.loginTime) {

                const user = await userSchema.findByIdAndUpdate({ _id: tokenInfo.id },
                    { loginTime: tokenInfo.iat },
                    { new: true })
                req.user = user
                next()

            } else {
                return res.status(401).json({
                    success: false,
                    status: 401,
                    message: "Insert new token",
                })
            }

        }

    } catch (error) {
        return res.status(401).json({
            success: false,
            status: 401,
            message: "There is no token, insert token first",
            body: {}
        });
    }
}
