import React, { useState } from "react";
import { graphql } from "gatsby";
import Seo from "../components/SEO";
import Menu from "../components/Menu";
import { Waypoint } from "react-waypoint";
import {
  Title,
  Inner,
  Container,
  ContactMain,
} from "../components/LayoutComponents";
import Background from "../components/Background";
import tw, { styled, css } from "twin.macro";
import webconfig from "../../config/website";

const StyledDivWrapper = styled.div`
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  flex: 1;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
`;

function Signature(props) {
  const { data } = props;
  const { background } = data;

  const [menuIcon, setMenuIcon] = useState(false);
  const [name, setName] = useState(webconfig.siteTitleAlt);
  const [role, setRole] = useState(webconfig.role);
  const [logo, setLogo] = useState(webconfig.siteUrl + webconfig.siteLogo2);
  const [phone, setPhone] = useState(webconfig.phone);
  const [email, setEmail] = useState(webconfig.email);
  const [website, setWebsite] = useState(webconfig.siteUrl);
  const [fblink, setFblink] = useState(webconfig.accounts.facebook);
  const [fbiconlink, setFbiconlink] = useState(webconfig.accounts.fbiconlink);
  const [twlink, setTwlink] = useState(webconfig.accounts.twitter);
  const [twiconlink, setTwiconlink] = useState(webconfig.accounts.twiconlink);
  const [inslink, setInslink] = useState(webconfig.accounts.instagram);
  const [insiconlink, setInsiconlink] = useState(
    webconfig.accounts.insiconlink
  );
  const [lnlink, setLnlink] = useState(webconfig.accounts.linkedin);
  const [lniconlink, setLniconlink] = useState(webconfig.accounts.lniconlink);
  const [ghlink, setGhlink] = useState(webconfig.accounts.github);
  const [ghiconlink, setGhiconlink] = useState(webconfig.accounts.ghiconlink);

  const copyToClipboard = () => {
    let copyText = document.querySelector(".signature");
    const range = document.createRange();
    if (copyText) {
      range.selectNode(copyText);
    }
    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    try {
      let successful = document.execCommand("copy");
      console.log(successful ? "Success" : "Fail");
      // setState((prevState) => ({
      //   ...prevState,
      //   copied: true,
      // }));
    } catch (err) {
      console.log("Fail");
    }
  };

  return (
    <Menu showMenu={menuIcon} relative>
      <Background data={background} />
      <div className="absolute">
        <Waypoint
          onEnter={() => setMenuIcon(false)}
          onLeave={() => setMenuIcon(true)}
        />
        <Container>
          <Inner>
            <Title id="PageTitle">Email Signature</Title>
            <StyledDivWrapper>
              <Column>
                <h1>Name</h1>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <h1>Role</h1>
                <input value={role} onChange={(e) => setRole(e.target.value)} />
                <h1>Email</h1>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h1>Logo</h1>
                <input value={logo} onChange={(e) => setLogo(e.target.value)} />
                <h1>Phone</h1>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <h1>website</h1>
                <input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <h1>fblink</h1>
                <input
                  value={fblink}
                  onChange={(e) => setFblink(e.target.value)}
                />
                <h1>fbiconlink</h1>
                <input
                  value={fbiconlink}
                  onChange={(e) => setFbiconlink(e.target.value)}
                />
                <h1>twlink</h1>
                <input
                  value={twlink}
                  onChange={(e) => setTwlink(e.target.value)}
                />
                <h1>twiconlink</h1>
                <input
                  value={twiconlink}
                  onChange={(e) => setTwiconlink(e.target.value)}
                />
                <h1>inslink</h1>
                <input
                  value={inslink}
                  onChange={(e) => setInslink(e.target.value)}
                />
                <h1>insiconlink</h1>
                <input
                  value={insiconlink}
                  onChange={(e) => setInsiconlink(e.target.value)}
                />
                <h1>lnlink</h1>
                <input
                  value={lnlink}
                  onChange={(e) => setLnlink(e.target.value)}
                />
                <h1>lniconlink</h1>
                <input
                  value={lniconlink}
                  onChange={(e) => setLniconlink(e.target.value)}
                />
                <h1>ghlink</h1>
                <input
                  value={ghlink}
                  onChange={(e) => setGhlink(e.target.value)}
                />
                <h1>ghiconlink</h1>
                <input
                  value={ghiconlink}
                  onChange={(e) => setGhiconlink(e.target.value)}
                />
              </Column>
              <Column>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    lineHeight: "0px",
                    fontSize: "1px",
                    padding: "0px",
                    borderSpacing: "0px",
                    margin: "0px",
                    borderCollapse: "collapse",
                    width: "500px",
                    fontFamily: "Arial,Helvetica,sans-serif",
                    lineHeight: "0px",
                    padding: "0px",
                    borderSpacing: "0px",
                    margin: "0px",
                    borderCollapse: "collapse",
                  }}
                  className="signature"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          fontFamily: "Calibri,Helvetica,sans-serif",
                          fontSize: "15px",
                          lineHeight: "17px",
                          color: "rgb(0,0,0)",
                        }}
                        colspan="5"
                      >
                        <span
                          style={{
                            fontFamily: "Calibri,Helvetica,sans-serif",
                            fontSize: "15px",
                            lineHeight: "17px",
                            color: "rgb(0,0,0)",
                          }}
                        >
                          Kind Regards,
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          width: "20%",
                        }}
                        rowspan="10"
                      >
                        <a
                          rel="nofollow"
                          href={website}
                          style={{
                            fontSize: "0px",
                            lineHeight: "0px",
                          }}
                          target="_blank"
                        >
                          <img
                            height={96}
                            width={94}
                            alt=""
                            border={0}
                            src={logo}
                            style={{ borderRadius: "50%" }}
                          />
                        </a>
                      </td>
                      <td
                        rowspan="10"
                        width={1}
                        style={{
                          borderCollapse: "collapse",
                          backgroundColor: "rgb(0,0,0)",
                          width: "1px",
                        }}
                      />
                      <td rowspan="10" style={{ width: "2%" }}></td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          fontFamily: "Calibri,Helvetica,sans-serif",
                          fontSize: "17px",
                          lineHeight: "19px",
                          fontWeight: "bold",
                          color: "rgb(0,139,184)",
                        }}
                      >
                        <a
                          rel="nofollow"
                          href={website}
                          style={{
                            lineHeight: "19px",
                            color: "rgb(0,139,184)",
                            display: "inline",
                          }}
                          target="_blank"
                        >
                          {name}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          fontFamily: "Calibri,Helvetica,sans-serif",
                          fontSize: "15px",
                          lineHeight: "17px",
                          fontWeight: "bold",
                          color: "rgb(0,0,0)",
                        }}
                      >
                        <span
                          style={{
                            lineHeight: "17px",
                          }}
                        >
                          {role}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          fontFamily: "Calibri,Helvetica,sans-serif",
                          fontSize: "15px",
                          lineHeight: "17px",
                          color: "rgb(0,0,0)",
                        }}
                      >
                        <span
                          style={{
                            lineHeight: "17px",
                            color: "rgb(0,139,184)",
                          }}
                        >
                          Phone.
                        </span>
                        &nbsp;
                        <span
                          style={{
                            lineHeight: "17px",
                          }}
                        >
                          {phone}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          fontFamily: "Calibri,Helvetica,sans-serif",
                          fontSize: "15px",
                          lineHeight: "17px",
                          color: "rgb(0,0,0)",
                        }}
                      >
                        <span
                          style={{
                            lineHeight: "17px",
                            color: "rgb(0,139,184)",
                          }}
                        >
                          Web.
                        </span>
                        &nbsp;
                        <a
                          rel="nofollow"
                          href="https://hurkanyakay.com/"
                          style={{
                            lineHeight: "17px",
                            color: "rgb(0,0,0)",
                            display: "inline",
                          }}
                          target="_blank"
                        >
                          {website}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          fontFamily: "Calibri,Helvetica,sans-serif",
                          fontSize: "15px",
                          lineHeight: "17px",
                          color: "rgb(0,0,0)",
                        }}
                      >
                        <span
                          style={{
                            lineHeight: "17px",
                            color: "rgb(0,139,184)",
                          }}
                        >
                          Email.
                        </span>
                        &nbsp;
                        <span
                          style={{
                            lineHeight: "17px",
                          }}
                        >
                          <a
                            rel="nofollow"
                            href="mailto:me@hurkanyakay.com"
                            style={{
                              lineHeight: "17px",
                              color: "rgb(0,0,0)",
                              display: "inline",
                            }}
                            target="_blank"
                          >
                            {email}
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          paddingBottom: "3px",
                          height: "3px",
                        }}
                      />
                    </tr>
                    <tr>
                      <td>
                        <a
                          rel="nofollow"
                          href={fblink}
                          style={{
                            fontFamily: "Calibri,Helvetica,sans-serif",
                            fontSize: "15px",
                            lineHeight: "17px",
                            color: "rgb(0,0,0)",
                            display: "inline-block",
                          }}
                          target="_blank"
                        >
                          <img
                            height={24}
                            width={24}
                            alt="facebook"
                            border={0}
                            src={fbiconlink}
                          />
                        </a>
                        <span
                          style={{
                            borderCollapse: "collapse",
                            paddingRight: "5px",
                            width: "5px",
                          }}
                        />
                        <a
                          rel="nofollow"
                          href={twlink}
                          style={{
                            fontFamily: "Calibri,Helvetica,sans-serif",
                            fontSize: "15px",
                            lineHeight: "17px",
                            color: "rgb(0,0,0)",
                            display: "inline-block",
                          }}
                          target="_blank"
                        >
                          <img
                            height={24}
                            width={24}
                            alt="twitter"
                            border={0}
                            src={twiconlink}
                          />
                        </a>
                        <span
                          style={{
                            borderCollapse: "collapse",
                            paddingRight: "5px",
                            width: "5px",
                          }}
                        />
                        <a
                          rel="nofollow"
                          href={lnlink}
                          style={{
                            fontFamily: "Calibri,Helvetica,sans-serif",
                            fontSize: "15px",
                            lineHeight: "17px",
                            color: "rgb(0,0,0)",
                            display: "inline-block",
                          }}
                          target="_blank"
                        >
                          <img
                            height={24}
                            width={24}
                            alt="linkedin"
                            border={0}
                            src={lniconlink}
                          />
                        </a>
                        <span
                          style={{
                            borderCollapse: "collapse",
                            paddingRight: "5px",
                            width: "5px",
                          }}
                        />
                        <a
                          rel="nofollow"
                          href={inslink}
                          style={{
                            fontFamily: "Calibri,Helvetica,sans-serif",
                            fontSize: "15px",
                            lineHeight: "17px",
                            color: "rgb(0,0,0)",
                            display: "inline-block",
                          }}
                          target="_blank"
                        >
                          <img
                            height={24}
                            width={24}
                            alt="instagram"
                            border={0}
                            src={insiconlink}
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  <button
                    onClick={copyToClipboard}
                    style={{ border: "1px solid #ccc" }}
                  >
                    Copy
                  </button>
                </p>
              </Column>
            </StyledDivWrapper>
            <ContactMain style={{ marginTop: "15rem" }} />
          </Inner>
        </Container>
      </div>
    </Menu>
  );
}

export const query = graphql`
  query PQuery {
    background: file(relativePath: { eq: "background.jpg" }) {
      ...BackgroundImageFragment
    }
  }
`;
export const Head = () => <Seo title="Signature" />;

export default Signature;
