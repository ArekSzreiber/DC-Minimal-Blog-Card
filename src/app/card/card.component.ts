import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  styles: [`

    #container {
      background-color: #FFFFFF;
      border-radius: 16px;
      box-shadow: 0 30px 100px 0 rgba(17, 23, 41, 0.05);
      width: calc(2 * 16px + 366px);
    }

    #main {
      box-sizing: content-box;
      padding: 16px 16px 0;
    }

    #image {
      border-radius: 16px;
      display: block;
    }

    #header {

    }

    #tag-container {
      padding: 16px 0;
    }

    .tag {
      background-color: #E6D6FC;
      border-radius: 16px;
      color: #883AE1;
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      padding: 6px 16px;
    }

    #title {
      color: #20293A;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 0.3px;
      line-height: 24px;
      margin: 0;
    }

    #content {
      color: #6C727F;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.2px;
      margin: 6px 0 0;
      word-spacing: 1.0px;
      padding-right: 10px;
    }

    #footer {
      border-top: 1px solid #E5EAF0;
      margin-top: 20px;
      padding: 0 16px 20px 16px;
    }

    #footer-text {
      color: #6C727F;
      display: table-cell;
      font-size: 12px;
      height: 35px;
      vertical-align: bottom;
    }


  `],
  template: `
    <article id="container">
      <div id="main">
        

      <img id="image" ngSrc="./assets/cactus_img.jpg" alt="" width="366" height="152" priority="true">

      <header id="header">
        <div id="tag-container">
          <div class="tag">
            Design
          </div>
        </div>

        <h1 id="title">
          Embracing minimalism
        </h1>
      </header>

      <p id="content">
        From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that
        lies in simplicity.
      </p>
      </div>

      <footer id="footer">
        <span id="footer-text">
        Annie Spratt
        </span>
      </footer>
    </article>
  `,
})
export class CardComponent {

}
