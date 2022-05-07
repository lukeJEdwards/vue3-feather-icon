<template>
  <section>
    <h2>Install</h2>
    <p class="subtitle">With npm:</p>
    <div class="code-block">
      $&nbsp;
      <span class="dark-orange">npm install</span>
      vue3-feather-components
    </div>
    <p class="subtitle">With yarn:</p>
    <div class="code-block">
      $&nbsp;
      <span class="dark-orange">yarn add</span>
      vue3-feather-components
    </div>
    <p class="subtitle">With pnpm:</p>
    <div class="code-block">
      $&nbsp;
      <span class="dark-orange">pnpm install</span>
      vue3-feather-components
    </div>
  </section>
  <section>
    <h2>Usage</h2>
    <p class="subtitle">Size:</p>
    <p class="body">
      There is two ways of use the size prop either by
      <span class="accent">px</span> units or
      <span class="accent">em</span> units, when using em end the string with
      <span class="accent">x</span>.
    </p>
    <div class="code-block">
      <span class="white">&lt;</span>
      <span class="code">template</span>
      <span class="white">></span>
      <br />
      <span class="white">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
      <span class="code">Icon</span>
      <span class="orange">&nbsp;size</span>
      <span class="white">=</span>
      <span class="string">"32"</span>
      <span class="white">/></span>
      <br />
      <span class="white">&lt;/</span>
      <span class="code">template</span>
      <span class="white">></span>

      <br />
      <br />

      <span class="white">&lt;</span>
      <span class="code">script</span>
      <span class="orange">&nbsp;setup</span>
      <span class="white">></span>
      <br />

      <span class="key-word">import&nbsp;</span>
      <span class="orange">{&nbsp;</span>
      <span class="code">Icon</span>
      <span class="orange">&nbsp;}&nbsp;</span>
      <span class="key-word">from&nbsp;</span>
      <span class="string">'vue3-feather-icon'</span>

      <br />
      <span class="white">&lt;/</span>
      <span class="code">script</span>
      <span class="white">></span>
      <br />
    </div>
    <br />
    <div class="code-block">
      <span class="white">&lt;</span>
      <span class="code">template</span>
      <span class="white">></span>
      <br />
      <span class="white">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
      <span class="code">Icon</span>
      <span class="orange">&nbsp;size</span>
      <span class="white">=</span>
      <span class="string">"1.5x"</span>
      <span class="white">/></span>
      <br />
      <span class="white">&lt;/</span>
      <span class="code">template</span>
      <span class="white">></span>

      <br />
      <br />

      <span class="white">&lt;</span>
      <span class="code">script</span>
      <span class="orange">&nbsp;setup</span>
      <span class="white">></span>
      <br />

      <span class="key-word">import&nbsp;</span>
      <span class="orange">{&nbsp;</span>
      <span class="code">Icon</span>
      <span class="orange">&nbsp;}&nbsp;</span>
      <span class="key-word">from&nbsp;</span>
      <span class="string">'vue3-feather-icon'</span>

      <br />
      <span class="white">&lt;/</span>
      <span class="code">script</span>
      <span class="white">></span>
      <br />
    </div>
    <p class="subtitle">Customisation:</p>
    <p class="body">
      All other customisable attributes are
      <span class="accent">height&nbsp;</span>,
      <span class="accent">weight&nbsp;</span>,
      <span class="accent">colour&nbsp;</span>and
      <span class="accent">stroke weight&nbsp;</span>all passed in through vue
      attrs.
    </p>
    <div class="code-block">
      <span class="white">&lt;</span>
      <span class="code">template</span>
      <span class="white">></span>
      <br />
      <span class="white">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
      <span class="code">Icon</span>
      <br />
      <span class="orange">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width</span>
      <span class="white">=</span>
      <span class="string">"28"</span>
      <br />
      <span class="orange">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height</span>
      <span class="white">=</span>
      <span class="string">"32"</span>
      <br />
      <span class="orange">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stroke</span>
      <span class="white">=</span>
      <span class="string">"#A1A1A1"</span>
      <br />
      <span class="orange"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stroke-width</span
      >
      <span class="white">=</span>
      <span class="string">"1"</span>
      <br />
      <span class="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/></span>
      <br />
      <span class="white">&lt;/</span>
      <span class="code">template</span>
      <span class="white">></span>
    </div>
  </section>
</template>
