package main

import (
	"github.com/labstack/echo"
	// "net/http"
)

func main() {
	e := echo.New()

	e.Static("/", "react")

	e.Logger.Fatal(e.Start(":8000"))
}
