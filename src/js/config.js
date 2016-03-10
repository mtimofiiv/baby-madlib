const data = {

  basePhoto: 'room.jpg',
  introImage: 'big-tuna.png',
  audioQuestion: 'music',

  copy: {
    title: 'Fiiv and the Tuna are having a child.',
    subtitle: 'Even though my mummy and daddy are awesome, they don’t always agree on everything. Mummy loves reality TV, daddy hates it. Daddy wears shorts in the winter, mummy is always cold. So who will I take after? Help me figure it out!',
    closingRemark: 'Thanks for helping me figure out who I’ll be. Can’t wait to meet you all in July!<br><br>xo<br>Baby Jorts',
    defaultSelectText: 'select one...',
    footer: 'Made with <i class="fa fa-fw fa-heartbeat"></i> in Amsterdam, as was the baby.<br>The source is available on <a href="https://github.com/mtimofiiv/baby-madlib"><i class="fa fa-fw fa-github-alt"></i></a>'
  },

  faces: [
    'face-0.png',
    'face-1.png',
    'face-2.png',
    'face-3.png',
    'face-4.png'
  ],

  madlib: {

    sports: {
      label: 'Of course I love football, so I’ll probably be a fan of ',

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
      label: 'And mum and dad both believe in equality of all people, but will my soapbox be all about ',

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
      label: 'My parents sure do like some weird music, but I think I’ll like to ',

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
      label: 'And mmmmm, food, we know they both like lots of that. I think I’ll prefer ',

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
