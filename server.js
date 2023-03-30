const express = require("express")
const app = express()
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

app.use(express.json())
app.get("/", async (req, res) => {
	const user = await prisma.user.findMany({
		include: {
			writtenPosts: true,
		},
	})
	console.log(user)
	console.log(JSON.stringify(user, null, 2))
	res.send(user)
})

app.listen(3000, () => console.log("sever started at port 3000!"))

// async function main() {
// 	const user = await prisma.user.findMany({
// 		include: {
// 			writtenPosts: true,
// 		},
// 	})
// 	console.log(user)
// }
// async function main2() {
// 	const post = await prisma.post.findMany()
// 	console.log(post)
// }
// async function deletee() {
// 	await prisma.user.deleteMany()
// }

// main()
// 	.catch((e) => {
// 		console.error(e.message)
// 	})
// 	.finally(async () => {
// 		await prisma.$disconnect()
// 	})
