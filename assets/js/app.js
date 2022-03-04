import test from "./mylib"


function wait(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis)
    })
}


async function main() {
    console.log("Hello...")
    await wait(2000)
    console.log("...world!")
}

main()

test()