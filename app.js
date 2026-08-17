class GameApp {
  constructor() {
    this.root = document.getElementById('root');
    this.state = {
      screen: 'TITLE',
      prologueIndex: 0,
      ch1NodeKey: 'start',
      endingType: 'GOOD',
      activeCharId: null
    };

    this.isTyping = false;
    this.typewriterInterval = null;
    this.currentFullText = '';
    this.currentTextElem = null;

    this.initKeyboardListeners();
    this.render();
  }

  setScreen(screenName) {
    this.stopTypewriter();
    this.state.screen = screenName;
    if (screenName === 'PROLOGUE') this.state.prologueIndex = 0;
    if (screenName === 'CHAPTER_1_ANDRE' || screenName === 'CHAPTER_1_ANDRIANA') this.state.ch1NodeKey = 'start';
    this.render();
  }

  initKeyboardListeners() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (this.state.screen === 'PROLOGUE') {
          e.preventDefault();
          this.handleDialogueAdvance(() => this.nextPrologueDialogue());
        } else if (this.state.screen === 'CHAPTER_1_ANDRE') {
          const currentNode = CHAPTER_1_ANDRE_GRAPH[this.state.ch1NodeKey];
          if (currentNode && !currentNode.isChoice) {
            e.preventDefault();
            this.handleDialogueAdvance(() => this.nextChapter1AndreNode());
          }
        } else if (this.state.screen === 'CHAPTER_1_ANDRIANA') {
          const currentNode = CHAPTER_1_ANDRIANA_GRAPH[this.state.ch1NodeKey];
          if (currentNode && !currentNode.isChoice) {
            e.preventDefault();
            this.handleDialogueAdvance(() => this.nextChapter1AndrianaNode());
          }
        }
      }
    });
  }

  handleDialogueAdvance(onCompleteAdvance) {
    if (this.isTyping) {
      this.completeTypewriter();
    } else {
      onCompleteAdvance();
    }
  }

  startTypewriter(element, text) {
    this.stopTypewriter();
    if (!element) return;

    this.isTyping = true;
    this.currentTextElem = element;
    this.currentFullText = text;
    element.textContent = '';

    let charIndex = 0;
    const speed = 25;

    this.typewriterInterval = setInterval(() => {
      if (charIndex < text.length) {
        element.textContent += text.charAt(charIndex);
        charIndex++;
      } else {
        this.stopTypewriter();
      }
    }, speed);
  }

  completeTypewriter() {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
      this.typewriterInterval = null;
    }
    if (this.currentTextElem && this.currentFullText) {
      this.currentTextElem.textContent = this.currentFullText;
    }
    this.isTyping = false;
  }

  stopTypewriter() {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
      this.typewriterInterval = null;
    }
    this.isTyping = false;
  }

  nextPrologueDialogue() {
    if (this.state.prologueIndex < PROLOGUE_DIALOGUES.length - 1) {
      this.state.prologueIndex++;
      this.render();
    } else {
      this.setScreen('CHARACTER_SELECT');
    }
  }

  nextChapter1AndreNode() {
    const currentNode = CHAPTER_1_ANDRE_GRAPH[this.state.ch1NodeKey];
    if (!currentNode || currentNode.isChoice) return;

    if (currentNode.next === 'trigger_ending_good') {
      this.triggerEnding('GOOD');
    } else if (currentNode.next === 'trigger_ending_bad') {
      this.triggerEnding('BAD');
    } else if (currentNode.next) {
      this.state.ch1NodeKey = currentNode.next;
      this.render();
    }
  }

  nextChapter1AndrianaNode() {
    const currentNode = CHAPTER_1_ANDRIANA_GRAPH[this.state.ch1NodeKey];
    if (!currentNode || currentNode.isChoice) return;

    if (currentNode.next === 'trigger_ending_good') {
      this.triggerEnding('GOOD');
    } else if (currentNode.next === 'trigger_ending_bad') {
      this.triggerEnding('BAD');
    } else if (currentNode.next) {
      this.state.ch1NodeKey = currentNode.next;
      this.render();
    }
  }

  triggerEnding(type) {
    this.state.endingType = type;
    this.setScreen('ENDING');
  }

  render() {
    this.stopTypewriter();
    this.root.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'app-container';

    switch (this.state.screen) {
      case 'TITLE':
        container.appendChild(this.createTitleScreen());
        break;
      case 'PROLOGUE':
        container.appendChild(this.createPrologueScreen());
        break;
      case 'CHARACTER_SELECT':
        container.appendChild(this.createCharacterSelectScreen());
        break;
      case 'CHAPTER_1_ANDRE':
        container.appendChild(this.createChapter1AndreScreen());
        break;
      case 'CHAPTER_1_ANDRIANA':
        container.appendChild(this.createChapter1AndrianaScreen());
        break;
      case 'ENDING':
        container.appendChild(this.createEndingScreen());
        break;
    }

    this.root.appendChild(container);
    this.applyNativeAnimations();
    this.triggerTypewriterIfDialogue();
  }

  triggerTypewriterIfDialogue() {
    const textElem = this.root.querySelector('.dialogue-text');
    if (!textElem) return;

    let fullText = '';
    if (this.state.screen === 'PROLOGUE') {
      const diag = PROLOGUE_DIALOGUES[this.state.prologueIndex];
      if (diag) fullText = diag.text;
    } else if (this.state.screen === 'CHAPTER_1_ANDRE') {
      const node = CHAPTER_1_ANDRE_GRAPH[this.state.ch1NodeKey];
      if (node && !node.isChoice) fullText = node.text;
    } else if (this.state.screen === 'CHAPTER_1_ANDRIANA') {
      const node = CHAPTER_1_ANDRIANA_GRAPH[this.state.ch1NodeKey];
      if (node && !node.isChoice) fullText = node.text;
    }

    if (fullText) {
      this.startTypewriter(textElem, fullText);
    }
  }

  applyNativeAnimations() {
    let currentNode = null;
    if (this.state.screen === 'CHAPTER_1_ANDRE') currentNode = CHAPTER_1_ANDRE_GRAPH[this.state.ch1NodeKey];
    if (this.state.screen === 'CHAPTER_1_ANDRIANA') currentNode = CHAPTER_1_ANDRIANA_GRAPH[this.state.ch1NodeKey];

    const dialogueBox = this.root.querySelector('.dialogue-box');
    if (dialogueBox && currentNode && currentNode.text && currentNode.text.includes('YAAMPUNNNN ANDREE')) {
      dialogueBox.classList.add('shake');
    }
  }

  createTitleScreen() {
    const screen = document.createElement('div');
    screen.className = 'title-screen';

    screen.innerHTML = `
      <div class="title-content">
        <span class="title-logo-badge">Visual Novel</span>
        <h1>Teman Tahu</h1>

        <div style="margin-top: 32px;">
          <button class="btn btn-primary btn-start" id="btn-start-game">
            <span>Mulai Game</span>
            <span style="font-size: 1.2rem;">></span>
          </button>
        </div>
      </div>
    `;

    screen.querySelector('#btn-start-game').addEventListener('click', () => {
      this.setScreen('PROLOGUE');
    });

    return screen;
  }

  createPrologueScreen() {
    const currentDiag = PROLOGUE_DIALOGUES[this.state.prologueIndex];
    const isFlashback = currentDiag.isFlashback;
    const isBlackscreen = currentDiag.isBlackscreen;

    const screen = document.createElement('div');
    screen.className = 'prologue-screen';

    const bgClass = isBlackscreen ? 'blackscreen' : isFlashback ? 'flashback' : 'normal';

    screen.innerHTML = `
      <div class="prologue-bg ${bgClass}"></div>

      ${currentDiag.sprite ? `
        <div class="vn-sprite-container">
          <img src="${currentDiag.sprite}" alt="${currentDiag.speaker || 'Karakter'}" class="vn-speaker-sprite" />
        </div>
      ` : ''}

      ${isFlashback ? `
        <div class="flashback-indicator">
          <div class="flashback-dot"></div>
          <span>Flashback (Usia 5 Tahun)</span>
        </div>
      ` : ''}

      <div class="prologue-top-bar">
        <span class="progress-tag">PROLOG [${this.state.prologueIndex + 1} / ${PROLOGUE_DIALOGUES.length}]</span>
        <button class="btn-skip" id="btn-skip-prologue">Skip Prolog</button>
      </div>

      <div class="dialogue-wrapper" id="dialogue-wrapper">
        <div class="dialogue-box">
          ${currentDiag.speaker ? `
            <span class="speaker-badge" style="background-color: ${currentDiag.badgeBg || '#0f172a'}; color: #fff;">
              ${currentDiag.speaker}
            </span>
          ` : ''}

          <p class="dialogue-text ${!currentDiag.speaker ? 'narration-text' : ''}">
            ${currentDiag.text}
          </p>

          <div class="next-prompt">
            <span>Tekan Enter / Tap untuk Lanjut</span>
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    `;

    screen.querySelector('#btn-skip-prologue').addEventListener('click', () => {
      this.setScreen('CHARACTER_SELECT');
    });

    screen.querySelector('#dialogue-wrapper').addEventListener('click', () => {
      this.handleDialogueAdvance(() => this.nextPrologueDialogue());
    });

    return screen;
  }

  createCharacterSelectScreen() {
    const container = document.createElement('div');
    container.className = 'char-select-screen';
    container.style.width = '100%';
    container.style.height = '100%';

    container.innerHTML = `
      <div class="header">
        <h1>Teman Tahu</h1>
        <p>Pilih Karaktermu - Chapter 1</p>
      </div>

      <div class="split-container" id="split-container">
        ${CHARACTERS.map((char, index) => {
          const posClass = index === 0 ? 'left' : 'right';

          return `
            <div
              class="pane ${posClass} ${char.id}"
              data-id="${char.id}"
              style="--accent-color: ${char.color}; --accent-shadow: ${char.shadow};"
            >
              <div class="pane-bg" style="background-image: url(${char.bg});"></div>
              <img src="${char.image}" alt="${char.name}" class="char-portrait" />

              <div class="profile-pane">
                <h2>${char.name}</h2>
                <span class="profile-age">${char.age}</span>
                <div class="profile-details">
                  <p><strong>Sifat</strong>${char.sifat}</p>
                  <p><strong>Latar Belakang</strong>${char.latarBelakang}</p>
                  <p><strong>Gejala Pubertas</strong>${char.gejala}</p>
                </div>
                <div class="char-select-action">
                  <span class="btn-char-select">Pilih ${char.name} &rarr;</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}

        <div class="divider" id="char-divider"></div>
      </div>
    `;

    const splitContainer = container.querySelector('#split-container');
    const panes = container.querySelectorAll('.pane');
    const divider = container.querySelector('#char-divider');

    panes.forEach(pane => {
      pane.addEventListener('click', () => {
        const charId = pane.getAttribute('data-id');
        if (charId === 'andre') {
          this.setScreen('CHAPTER_1_ANDRE');
        } else if (charId === 'andriana') {
          this.setScreen('CHAPTER_1_ANDRIANA');
        }
      });

      pane.addEventListener('mouseenter', () => {
        const charId = pane.getAttribute('data-id');

        panes.forEach(p => {
          if (p === pane) {
            p.classList.add('active');
            p.classList.remove('dimmed');
          } else {
            p.classList.remove('active');
            p.classList.add('dimmed');
          }
        });

        if (divider) {
          divider.className = `divider glow-${charId}`;
        }
      });
    });

    splitContainer.addEventListener('mouseleave', () => {
      panes.forEach(p => {
        p.classList.remove('active', 'dimmed');
      });

      if (divider) {
        divider.className = 'divider';
      }
    });

    return container;
  }

  createChapter1AndreScreen() {
    const currentNode = CHAPTER_1_ANDRE_GRAPH[this.state.ch1NodeKey];
    const screen = document.createElement('div');
    screen.className = 'prologue-screen';

    if (!currentNode) return screen;

    if (currentNode.isChoice) {
      screen.innerHTML = `
        <div class="prologue-bg normal"></div>
        <div class="prologue-top-bar">
          <span class="progress-tag">CHAPTER 1: ANDRE POV</span>
        </div>

        <div class="choice-overlay">
          <h3 class="choice-question">${currentNode.question}</h3>
          <div class="choice-options-list">
            ${currentNode.options.map((opt, i) => `
              <button class="btn-choice" data-target="${opt.target}" style="--index: ${i}">
                <span>${opt.text}</span>
                <span>-></span>
              </button>
            `).join('')}
          </div>
        </div>
      `;

      screen.querySelectorAll('.btn-choice').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = btn.getAttribute('data-target');
          if (target === 'trigger_ending_bad') {
            this.triggerEnding('BAD');
          } else if (target === 'trigger_ending_good') {
            this.triggerEnding('GOOD');
          } else {
            this.state.ch1NodeKey = target;
            this.render();
          }
        });
      });
    } else {
      screen.innerHTML = `
        <div class="prologue-bg ${currentNode.bgType || 'normal'}"></div>

        ${currentNode.sprite ? `
          <div class="vn-sprite-container">
            <img src="${currentNode.sprite}" alt="${currentNode.speaker || 'Karakter'}" class="vn-speaker-sprite" />
          </div>
        ` : ''}

        <div class="prologue-top-bar">
          <span class="progress-tag">CHAPTER 1: ANDRE POV</span>
        </div>

        <div class="dialogue-wrapper" id="dialogue-wrapper-ch1">
          <div class="dialogue-box">
            ${currentNode.speaker ? `
              <span class="speaker-badge" style="background-color: ${currentNode.badgeBg || '#0f172a'}; color: #fff;">
                ${currentNode.speaker}
              </span>
            ` : ''}

            <p class="dialogue-text ${!currentNode.speaker ? 'narration-text' : ''}">
              ${currentNode.text}
            </p>

            <div class="next-prompt">
              <span>Tekan Enter / Tap untuk Lanjut</span>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      `;

      screen.querySelector('#dialogue-wrapper-ch1').addEventListener('click', () => {
        this.handleDialogueAdvance(() => this.nextChapter1AndreNode());
      });
    }

    return screen;
  }

  createChapter1AndrianaScreen() {
    const currentNode = CHAPTER_1_ANDRIANA_GRAPH[this.state.ch1NodeKey];
    const screen = document.createElement('div');
    screen.className = 'prologue-screen';

    if (!currentNode) return screen;

    if (currentNode.isChoice) {
      screen.innerHTML = `
        <div class="prologue-bg normal"></div>
        <div class="prologue-top-bar">
          <span class="progress-tag">CHAPTER 1: ANDRIANA POV</span>
        </div>

        <div class="choice-overlay">
          <h3 class="choice-question">${currentNode.question}</h3>
          <div class="choice-options-list">
            ${currentNode.options.map((opt, i) => `
              <button class="btn-choice" data-target="${opt.target}" style="--index: ${i}">
                <span>${opt.text}</span>
                <span>-></span>
              </button>
            `).join('')}
          </div>
        </div>
      `;

      screen.querySelectorAll('.btn-choice').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = btn.getAttribute('data-target');
          if (target === 'trigger_ending_bad') {
            this.triggerEnding('BAD');
          } else if (target === 'trigger_ending_good') {
            this.triggerEnding('GOOD');
          } else {
            this.state.ch1NodeKey = target;
            this.render();
          }
        });
      });
    } else {
      screen.innerHTML = `
        <div class="prologue-bg ${currentNode.bgType || 'normal'}"></div>

        ${currentNode.sprite ? `
          <div class="vn-sprite-container">
            <img src="${currentNode.sprite}" alt="${currentNode.speaker || 'Karakter'}" class="vn-speaker-sprite" />
          </div>
        ` : ''}

        <div class="prologue-top-bar">
          <span class="progress-tag">CHAPTER 1: ANDRIANA POV</span>
        </div>

        <div class="dialogue-wrapper" id="dialogue-wrapper-ch1-andriana">
          <div class="dialogue-box">
            ${currentNode.speaker ? `
              <span class="speaker-badge" style="background-color: ${currentNode.badgeBg || '#0f172a'}; color: #fff;">
                ${currentNode.speaker}
              </span>
            ` : ''}

            <p class="dialogue-text ${!currentNode.speaker ? 'narration-text' : ''}">
              ${currentNode.text}
            </p>

            <div class="next-prompt">
              <span>Tekan Enter / Tap untuk Lanjut</span>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      `;

      screen.querySelector('#dialogue-wrapper-ch1-andriana').addEventListener('click', () => {
        this.handleDialogueAdvance(() => this.nextChapter1AndrianaNode());
      });
    }

    return screen;
  }

  createEndingScreen() {
    const isGood = this.state.endingType === 'GOOD';
    const screen = document.createElement('div');
    screen.className = 'ending-screen';

    screen.innerHTML = `
      <div class="ending-card">
        <span class="ending-badge ${isGood ? 'good' : 'bad'}">
          ${isGood ? 'Good Ending: Rekonsiliasi & Pemahaman Pubertas' : 'Bad Ending: Terjerumus Pergaulan Bebas'}
        </span>

        <h2>${isGood ? 'Pelajaran Berharga di Masa Pubertas' : 'Awas Bahaya Mitos & Pergaulan Bebas'}</h2>

        <p class="ending-quote">
          ${isGood
            ? '“Pubertas adalah proses tumbuh dewasa yang wajar. Terima kasih telah berani terbuka kepada orang tua dan menghargai privasi serta batas pribadi sesama teman!”'
            : '“Informasi yang salah dari teman atau internet bisa menyesatkan. Selalu saring informasi secara faktual dan komunikasikan dengan orang tua.”'
          }
        </p>

        <div class="reflection-box">
          <h4>Refleksi Edukasi Pubertas & Kesehatan Reproduksi</h4>
          <ul>
            ${isGood ? `
              <li><strong>Menghormati Batas & Privasi Tubuh:</strong> Setiap orang berhak atas privasi tubuhnya. Hargai ketika teman berkata tidak.</li>
              <li><strong>Terbuka pada Orang Tua:</strong> Orang tua adalah tempat paling aman untuk bertanya saat bingung mengenai perubahan fisik dan emosional (menarche, mimpi basah).</li>
              <li><strong>Mitos Menstruasi vs Faktanya:</strong> Minum air dingin dan keramas saat menstruasi itu aman. Yang utama adalah menjaga kebersihan pembalut & organ reproduksi.</li>
            ` : `
              <li><strong>Waspada Tekanan Teman Sebaya (Peer Pressure):</strong> Tidak semua ajakan teman itu baik. Belajarlah untuk tegas berkata "TIDAK".</li>
              <li><strong>Jangan Mudah Percaya Mitos:</strong> Cari informasi faktual mengenai pubertas dan kesehatan reproduksi dari sumber resmi atau orang tua.</li>
            `}
          </ul>
        </div>

        <div class="btn-action-group">
          <button class="btn btn-primary btn-ending-restart" id="btn-restart-game">
            Mainkan Kembali / Ganti Karakter
          </button>
        </div>
      </div>
    `;

    screen.querySelector('#btn-restart-game').addEventListener('click', () => {
      this.setScreen('CHARACTER_SELECT');
    });

    return screen;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new GameApp();
});
