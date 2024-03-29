analyzer := jsluice.NewAnalyzer([]byte(`
    const login = (redirect) => {
        document.location = "/superadmin/changepassword?redirect=" + redirect + "&method=oauth"
    }
`))

for _, url := range analyzer.GetURLs() {
    j, err := json.MarshalIndent(url, "", "  ")
    if err != nil {
        continue
    }

    fmt.Printf("%s\n", j)
}
