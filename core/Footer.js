const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="66"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href="https://deno.land/manual.html">메뉴얼</a>
            <a href="https://deno.land/typedoc/">API 레퍼런스</a>
            <a href="https://github.com/denoland/deno_std">스탠다드 모듈들</a>
            <a href="https://deno.land/style_guide.html">스타일 가이드</a>
            <a href="https://deno.land/x/">모듈 저장소</a>
            <a href="https://github.com/denoland/deno/blob/master/Releases.md">
              릴리즈 노트
            </a>
            <a href="https://deno.land/benchmarks.html">벤치마크</a>
            <a href="https://github.com/denolib/awesome-deno">awesome-deno</a>
          </div>
          <div>
            <h5>Community</h5>

            <a href="https://discord.gg/yStutKK">디스코드 한국 채널</a>
            <a
              href="https://twitter.com/denoland_kr"
              target="_blank"
              rel="noreferrer noopener"
            >
              트위터
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/denoland-kr/denoland.kr">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
