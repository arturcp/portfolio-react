/* eslint-disable react/jsx-no-target-blank */
import Collapsible from '../Collapsible';
import { parameterize } from '../Utils'

import writings from '../data/writings.json';

export default function WritingSkills() {
  const listLinks = (list) => {
    return (
      <ul>
        {list.map((post) => {
          const url = post.url.length > 0 ? post.url : "javscript:;";

          return (
            <li key={parameterize(post.text)}>
              <a href={url} target="_blank">{post.text}</a>
            </li>
          )
        })}
      </ul>
    )
  }

  return(
    <Collapsible id="writing-skills" title="Writing Skills" defaultChecked={false}>
      <p>
        Reading and writing are (a big) part of me. I tried to create <a href="http://teoriadobigbang.wordpress.com" target="_blank">a science blog</a> once, it went pretty well, and now I have a technology blog and I also wrote a book!
      </p>

      <p>
        The book is a <a href="http://www.joran.arenah.com.br/" target="_blank">medieval fantasy </a> and it is not published yet. To make it happen is one of my main goals right now, so maybe I will soon have good news to share. I also wrote a small chronicle <a href="https://www.amazon.com.br/Conspira%C3%A7%C3%A3o-Artur-Caliendo-ebook/dp/B011EWJP8U" target="_blank">that can be purchased on Amazon</a>.
      </p>

      <p>
        Once I was invited to write <a href="http://minhavidaliteraria.com.br/2012/07/14/post-surpresa-da-semana-da-literatura-fantastica-por-que-ficcao-por-artur-prado/" target="_blank">a post to a famous literature blog</a> called Minha Vida Literária and it was a huge success.
      </p>

      <p>
        To complete the list of texts in Portuguese, I have been writing in <a href="https://labs.youse.com.br" target="_blank">Youse's technology blog</a>. Here is the list of my posts:
      </p>

      {listLinks(writings.youse)}

      <p>
        I have just started a new blog called <a href="https://elixir-da-vida-eterna.now.sh/" target="_blank">Elixir da vida eterna</a>, where I am writing everything I have been learning about <a href="https://elixir-lang.org/" target="_blank">Elixir</a> and <a href="https://www.phoenixframework.org/" target="_blank">Phoenix</a>.
      </p>

      <p>
        But I also write in English. I maintain <a href="https://medium.com/@artur.prado" target="_blank">my own blog on Medium</a> and, even though I have not been writing as much as I want, I like it very much. Here are my main articles:
      </p>

      {listLinks(writings.blogs)}
    </Collapsible>
  )
}
