const data = {

  basePhoto: 'room.jpg',
  introImage: 'big-tuna.png',
  audioQuestion: 'music',

  copy: {
    title: 'Fiiv and the Tuna are having a child...',
    subtitle: '"Even though my mum and dad are awesome, they don’t always agree on everything. Mum loves reality TV, dad hates it. Dad wears shorts in the winter, mum is always cold. So who will I take after? Help me figure it out!"',
    closingText: '(now scroll down to see how you have ruined our child)',
    closingRemark: `Thanks for helping me through my first identity crisis. Can't wait to meet you all in July!`,
    formIntroText: '(help me figure out who I am by picking my traits below)',
    defaultSelectText: 'select one...',
    footer: 'Made with <i class="fa fa-fw fa-heartbeat"></i> in Amsterdam, as was the baby.<br>The source is available on <a href="https://github.com/mtimofiiv/baby-madlib"><i class="fa fa-fw fa-github-alt"></i></a>'
  },

  madlib: {

    sports: {
      label: [
        'Of course I love football, so I’ll probably be a fan of ',
        '. '
      ],

      answers: {
        broncos: {
          title: 'the defending SuperBowl Champions',
          media: 'broncos.png',
          pick: 'tina'
        },
        patriots: {
          title: 'the team with the most SuperBowl wins in the last 15 years (4!)',
          media: 'patriots.png',
          pick: 'mike'
        }
      },

      style: {
        left: 506,
        top: 192,
        width: 69,
        height: 39
      }
    },

    philosophy: {
      label: [
        'And mum and dad both believe in equality of all people, but will my soapbox be all about ',
        '? '
      ],

      answers: {
        marxism: {
          title: 'economic and social justice',
          media: 'che.png',
          pick: 'mike'
        },
        feminism: {
          title: 'gender equity and opportunity',
          media: 'rosie.png',
          pick: 'tina'
        }
      },

      style: {
        left: 347,
        top: 178,
        width: 115,
        height: 96
      }
    },

    music: {
      label: [
        'My parents sure do like some weird music, but I think I’ll like to ',
        '. '
      ],

      answers: {
        bowie: {
          title: 'listen to music that says something about the world',
          media: 'E_8IXx4tsus',
          pick: 'mike'
        },
        miley: {
          title: 'have a dance party and sing along on Friday nights!',
          media: 'M11SvDtPBhA',
          pick: 'tina'
        }
      }

    },

    food: {
      label: [
        'And mmmmm, food, we know they both like lots of that. I think I’ll prefer ',
        '.'
      ],

      answers: {
        marxism: {
          title: 'anything that comes from the dead carcass of an animal',
          media: 'meat.png',
          pick: 'mike'
        },
        feminism: {
          title: 'whatever makes my cheeks pucker - sour sour sour!',
          media: 'lemon.png',
          pick: 'tina'
        }
      },

      style: {
        left: 353,
        top: 343,
        width: 153,
        height: 297
      }
    },

  }

};

export default data;
