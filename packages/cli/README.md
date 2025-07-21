# NayanUI CLI - Dev Tools needed for Every Website

**NayanUI CLI** is a powerful all-in-one tool developed to boost your website's visibility and rankings. With features like automatic sitemap generation, customizable robots.txt creation and seamless integration with major search engines, SEO Master simplifies the process of optimizing your site for search engines. Whether you're monitoring backlinks, improving page speed, or fine-tuning on-page SEO, SEO Master offers everything you need to achieve top search engine performance.

## ✨ Features

- ⌨️ **Framework-Agnostic Integration:** Easily integrates into any framework with simple commands.
- 🌈 **Automatic Sitemap Generation:** Creates sitemaps with domain-specific crawling.
- 🛡 **Customizable Robots.txt Creation:** Generate a fully customizable robots.txt file.
- ⚙️ **Search Engine Integration:** Works with all major search engines for seamless optimization.
- 🎨 **SEO Resource Validation:** Validate key SEO elements like sitemaps, robots.txt, metadata, and other assets.

## 🕹 Sitemaps Creation and Validation

### Simple sitemap creation:

```
npx @nayan-ui/cli create sitemap -w https://www.nayanui.com
```

### Advanced sitemap creation:

```
npx @nayan-ui/cli create sitemap --website https://www.nayanui.com --depth 10 --changefreq daily --output ./sitemap.xml
```

You can also use the shorter version of this command.

```
npx @nayan-ui/cli create sitemap -w https://www.nayanui.com -d 10 -f daily -o ./sitemap.xml
```

You can also integrate @nayan-ui/cli with your localhost to generate sitemaps without any deployments.

```
npx @nayan-ui/cli create sitemap -w http://localhost:3000 -r https://www.nayanui.com -d 10 -f daily -o ./sitemap.xml
```

this case it crawl your localhost URL and replace it with replacement URL.

| Name                | Parameter         | Default       | Usage                                                                                                                                                                 |
| ------------------- | ----------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Website URL         | --website / -w    | ''            | Pass website base URL to start crawling.                                                                                                                              |
| Replacement Website | --replacer / -r   | ''            | Pass replacement URL to replace crawled url, this will be mostly useful to crawl localhost and replace it with original URL.                                          |
| Crawling depth      | --depth / -d      | 10            | Pass depth to let the generator know how depth it need to crawl.                                                                                                      |
| Change frequency    | --changefreq / -f | daily         | Pass change frequency to let the generator know how frequently your content change, possible options are **_always, hourly, daily, weekly, monthly, yearly, never_**. |
| Output              | --output / -o     | ./sitemap.xml | Pass output to let the generator know where to keep generated sitemap.                                                                                                |

### Sitemap validation:

```
npx @nayan-ui/cli validate sitemap --input ./sitemap.xml
```

You can also use the shorter version of this command.

```
npx @nayan-ui/cli validate sitemap -i ./sitemap.xml
```

You can also validate sitemap.xml of your live website by passing URL.

```
npx @nayan-ui/cli validate sitemap --input https://www.nayanui.com/sitemap.xml --isremote true
```

| Name          | Parameter        | Default       | Usage                                                                             |
| ------------- | ---------------- | ------------- | --------------------------------------------------------------------------------- |
| Input sitemap | --input / -i     | ./sitemap.xml | Pass input sitemap to let the generator know where to find and validate sitemap.  |
| Is Remote     | --isremote / -ir | false         | Pass isremote true / false to the tool to know if its a local file or remote URL. |

## 🕹 Robots.txt Creation and Validation

### Robots.txt creation:

```
npx @nayan-ui/cli create robots --allowed /home,/about --disallowed /admin,/security --sitemap https://www.nayanui.com/sitemap.xml --output ./robots.txt
```

You can also use the shorter version of this command.

```
npx @nayan-ui/cli create robots -a /home,/about -d /admin,/security -s https://www.nayanui.com/sitemap.xml -o ./robots.txt
```

| Name             | Parameter         | Default      | Usage                                                                     |
| ---------------- | ----------------- | ------------ | ------------------------------------------------------------------------- |
| Allowed paths    | --allowed / -a    | ''           | Pass allowed links to allow search engines to crawling.                   |
| Disallowed paths | --disallowed / -d | ''           | Pass dis allowed links to restrict search engines from crawling.          |
| Sitemap          | --sitemap / -s    | ''           | Pass site map URL of your website.                                        |
| Output           | --output / -o     | ./robots.txt | Pass output to let the generator know where to keep generated robots.txt. |

### Robots.txt validation:

```
npx @nayan-ui/cli validate robots --input ./robots.txt
```

You can also use the shorter version of this command.

```
npx @nayan-ui/cli validate robots -i ./robots.txt
```

You can also validate robots.txt of your live website by passing URL.

```
npx @nayan-ui/cli validate robots --input https://www.nayanui.com/robots.txt --isremote true
```

| Name             | Parameter        | Default      | Usage                                                                             |
| ---------------- | ---------------- | ------------ | --------------------------------------------------------------------------------- |
| Input Robots.txt | --input / -i     | ./robots.xml | Pass output to let the generator know where to find and validate sitemap.         |
| Is Remote        | --isremote / -ir | false        | Pass isremote true / false to the tool to know if its a local file or remote URL. |

## 🖥 Future plans

- [x] Create SEO Master CLI tool to generate and validate **sitemaps** efficiently.
- [x] Create SEO Master CLI tool to generate and validate **robots.txt** efficiently.
- [ ] Support multiple sitemaps if website is bigger than certain limit.
- [ ] Create a web application to automatically generate and submit sitemap, robots.txt to search engines on a schedule.

## 🤝 Contributing

We welcome all contributions. You can submit any ideas as [Pull Requests](https://github.com/ursnj/nayan/pulls) or as [GitHub Issues](https://github.com/ursnj/nayan/issues). If you'd like to improve code, check out the Development Instructions and have a good time! :)
