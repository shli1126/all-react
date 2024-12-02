package main

import (
	"fmt"
	"log"
	"github.com/gofiber/fiber/v2"
)

func main() {
	fmt.Println("yo yo yo")

	app := fiber.New()

	log.Fatal(app.Listen(":4000"))

}