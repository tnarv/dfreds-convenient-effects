import Effect from './effect.js';
import Constants from '../constants.js';

export default class EffectDefinitions {
  get all() {
    return [
      ...this.conditions,
      ...this.spells,
      ...this.classFeatures,
      ...this.other,
    ];
  }

  get conditions() {
    return [
      this._blinded,
      this._charmed,
      this._concentrating,
      this._dead,
      this._deafened,
      this._exhaustion1,
      this._exhaustion2,
      this._exhaustion3,
      this._exhaustion4,
      this._exhaustion5,
      this._frightened,
      this._grappled,
      this._incapacitated,
      this._invisible,
      this._paralyzed,
      this._petrified,
      this._poisoned,
      this._prone,
      this._restrained,
      this._stunned,
      this._unconscious,
    ];
  }

  get spells() {
    return [
      // this._aid,
      this._bane,
      this._barkskin,
      this._beaconOfHope,
      this._bless,
      this._blur,

      this._contagion,
      this._contagionBlindingSickness,
      this._contagionFilthFever,
      this._contagionFleshRot,
      this._contagionMindfire,
      this._contagionSeizure,
      this._contagionSlimyDoom,

      this._darkvision,

      this._enlargeReduce,
      this._enlargeReduceEnlarge,
      this._enlargeReduceReduce,

      this._enhanceAbility,
      this._enhanceAbilityBearsEndurance,
      this._enhanceAbilityBullsStrength,
      this._enhanceAbilityCatsGrace,
      this._enhanceAbilityEaglesSplendor,
      this._enhanceAbilityFoxsCunning,
      this._enhanceAbilityOwlsWisdom,

      this._faerieFire,
      this._feeblemind,
      // this._falseLife, // TODO when we figure out higher level casting

      this._fireShield,
      this._fireShieldColdResistance,
      this._fireShieldFireResistance,

      this._fly,
      this._greaterInvisibility,
      this._guidance,
      this._guidingBolt,
      this._haste,
      // this._heroesFeast, // TODO when the issue with aid increasing current/max hp is fixed
      this._heroism,
      this._holyAura,
      this._huntersMark,
      this._invisibility,
      this._light,
      this._longstrider,
      this._mageArmor,
      this._mindBlank,
      this._mirrorImage,
      this._passWithoutTrace,

      this._protectionFromEnergy,
      this._protectionFromEnergyAcid,
      this._protectionFromEnergyCold,
      this._protectionFromEnergyFire,
      this._protectionFromEnergyLightning,
      this._protectionFromEnergyThunder,
      this._protectionFromPoison,

      // this._resistance, // TODO when we can ask if they want to spend it
      this._shield,
      this._shieldOfFaith,
      this._slow,
      this._spiderClimb,
      this._stoneskin,
      this._trueStrike,
      this._viciousMockery,
    ];
  }

  get classFeatures() {
    return [
      this._bardicInspiration,
      this._channelDivinitySacredWeapon,
      this._channelDivinityTurnUndead,
      this._rage,
      this._recklessAttack,
    ];
  }

  get other() {
    return [
      this._coverHalf,
      this._coverThreeQuarters,
      this._encumbered,
      this._dodge,
      this._flanked,
      this._flanking,
      this._greatWeaponMaster,
      this._heavilyEncumbered,
      this._rangedDisadvantage,
      this._sharpshooter,
    ];
  }

  /* Condition Effects */
  get _blinded() {
    return new Effect({
      name: 'Blinded',
      description:
        'Disadvantage on attack rolls while granting advantage to all who attack',
      icon: 'modules/dfreds-convenient-effects/images/blinded.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _charmed() {
    return new Effect({
      name: 'Charmed',
      description: 'No active effects',
      icon: 'modules/dfreds-convenient-effects/images/charmed.svg',
    });
  }

  get _concentrating() {
    return new Effect({
      name: 'Concentrating',
      description: 'No active effects',
      icon: 'modules/dfreds-convenient-effects/images/concentrating.svg',
    });
  }

  get _dead() {
    return new Effect({
      name: 'Dead',
      description: 'No active effects',
      icon: 'icons/svg/skull.svg',
    });
  }

  get _deafened() {
    return new Effect({
      name: 'Deafened',
      description: 'No active effects',
      icon: 'modules/dfreds-convenient-effects/images/deafened.svg',
    });
  }

  get _exhaustion1() {
    return new Effect({
      name: 'Exhaustion 1',
      description: 'Disadvantage on all ability checks',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion1.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _exhaustion2() {
    return new Effect({
      name: 'Exhaustion 2',
      description: 'Disadvantage on all ability checks and half movement',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion2.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 5,
        },
      ],
    });
  }

  get _exhaustion3() {
    return new Effect({
      name: 'Exhaustion 3',
      description:
        'Disadvantage on all ability checks, half movement, disadvantage on all attacks, and disadvantage on all saving throws',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion3.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 5,
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _exhaustion4() {
    return new Effect({
      name: 'Exhaustion 4',
      description:
        'Disadvantage on all ability checks, half movement, disadvantage on all attacks, disadvantage on all saving throws, and half HP',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion4.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 5,
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.attributes.hp.max',
          mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
          value: '0.5',
          priority: 5,
        },
      ],
    });
  }

  get _exhaustion5() {
    return new Effect({
      name: 'Exhaustion 5',
      description:
        'Disadvantage on all ability checks, zero movement, disadvantage on all attacks, disadvantage on all saving throws, and half HP',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion5.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 5,
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.attributes.hp.max',
          mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
          value: '0.5',
          priority: 5,
        },
      ],
    });
  }

  get _frightened() {
    return new Effect({
      name: 'Frightened',
      description: 'Disadvantage on all attack rolls and ability checks',
      icon: 'modules/dfreds-convenient-effects/images/frightened.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _grappled() {
    return new Effect({
      name: 'Grappled',
      description: 'No movement',
      icon: 'modules/dfreds-convenient-effects/images/grappled.svg',
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 5,
        },
      ],
    });
  }

  get _incapacitated() {
    return new Effect({
      name: 'Incapacitated',
      description: 'No active effects',
      icon: 'modules/dfreds-convenient-effects/images/incapacitated.svg',
    });
  }

  get _invisible() {
    return new Effect({
      name: 'Invisible',
      description:
        'Grants advantage on attack rolls while forcing disadvantage to all who attack',
      icon: 'modules/dfreds-convenient-effects/images/invisible.svg',
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _paralyzed() {
    return new Effect({
      name: 'Paralyzed',
      description:
        'Fail all dexterity and strength saves, grant advantage to all who attack, and all melee attacks that hit are criticals',
      icon: 'modules/dfreds-convenient-effects/images/paralyzed.svg',
      changes: [
        {
          key: 'flags.midi-qol.fail.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.fail.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.critical.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.critical.msak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _petrified() {
    return new Effect({
      name: 'Petrified',
      description:
        'Grant advantage to all who attack and add damage resistance to all magical and physical attacks',
      icon: 'modules/dfreds-convenient-effects/images/petrified.svg',
      changes: [
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.traits.dr.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'physical',
        },
        {
          key: 'data.traits.dr.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'magical',
        },
      ],
    });
  }

  get _poisoned() {
    return new Effect({
      name: 'Poisoned',
      description: 'Disadvantage on all attack rolls and ability checks',
      icon: 'modules/dfreds-convenient-effects/images/poisoned.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _prone() {
    return new Effect({
      name: 'Prone',
      description:
        'Grant advantage to all who melee attack, disadvantage to all who range attack, and disadvantage on all attacks',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.grants.advantage.attack.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.msak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.rsak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.rsak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _restrained() {
    return new Effect({
      name: 'Restrained',
      description:
        'Disadvantage on dexterity saving throws, disadvantage on all attacks, grant advantage to all who attack, and no movement',
      icon: 'modules/dfreds-convenient-effects/images/restrained.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 5,
        },
      ],
    });
  }

  get _stunned() {
    return new Effect({
      name: 'Stunned',
      description:
        'Fail all dexterity and strength saves and grant advantage to all who attack',
      icon: 'modules/dfreds-convenient-effects/images/stunned.svg',
      changes: [
        {
          key: 'flags.midi-qol.fail.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.fail.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _unconscious() {
    return new Effect({
      name: 'Unconscious',
      description:
        'Fail all dexterity and strength saves, grants advantage to all who attack, and all melee attacks are criticals',
      icon: 'icons/svg/unconscious.svg',
      changes: [...this._paralyzed.changes, ...this._prone.changes],
    });
  }

  /* Spell Effects */

  // TODO put back in when weird auto add HP is fixed
  // get _aid() {
  //   return new Effect({
  //     name: 'Aid',
  //     description: 'Add 5 to current and maximum hit points for 8 hours',
  //     icon: 'systems/dnd5e/icons/spells/heal-sky-1.jpg',
  //     seconds: Constants.SECONDS.IN_EIGHT_HOURS,
  //     changes: [
  //       {
  //         key: 'data.attributes.hp.tempmax',
  //         mode: CONST.ACTIVE_EFFECT_MODES.ADD,
  //         value: '+5',
  //       },
  //       {
  //         key: 'data.attributes.hp.temp',
  //         mode: CONST.ACTIVE_EFFECT_MODES.ADD,
  //         value: '+5',
  //       },
  //     ],
  //   });
  // }

  get _bane() {
    return new Effect({
      name: 'Bane',
      description:
        'Subtract 1d4 from all saving throws and attack rolls for 1 minute',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.bonuses.abilities.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.msak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.rsak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
      ],
    });
  }

  get _barkskin() {
    // TODO token magic effects
    return new Effect({
      name: 'Barkskin',
      description: 'Upgrade AC to 16 for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-orange-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.attributes.ac.value',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '16',
          priority: 5,
        },
      ],
    });
  }

  get _beaconOfHope() {
    return new Effect({
      name: 'Beacon of Hope',
      description:
        'Adds advantage to wisdom saving throws and death saving throws for 1 minute',
      icon: 'systems/dnd5e/icons/spells/light-sky-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.save.wis',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.deathSave',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _bless() {
    return new Effect({
      name: 'Bless',
      description: 'Add 1d4 to all saving throws and attack rolls for 1 minute',
      icon: 'systems/dnd5e/icons/spells/haste-sky-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.bonuses.abilities.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'data.bonuses.msak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'data.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'data.bonuses.rsak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'data.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'bloom',
        },
      ],
    });
  }

  get _blur() {
    return new Effect({
      name: 'Blur',
      description: 'Grants disadvantage to all who attack for 1 minute',
      icon: 'systems/dnd5e/icons/spells/air-burst-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'blur',
        },
      ],
    });
  }

  get _contagion() {
    return new Effect({
      name: 'Contagion',
      description:
        'Choose between blinding sickness, filth fever, flesh rot, mindfire, seizure, or slimy doom',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      nestedEffects: [
        this._contagionBlindingSickness,
        this._contagionFilthFever,
        this._contagionFleshRot,
        this._contagionMindfire,
        this._contagionSeizure,
        this._contagionSlimyDoom,
      ],
    });
  }

  get _contagionBlindingSickness() {
    return new Effect({
      name: 'Blinding Sickness',
      description:
        'Disadvantage on wisdom checks and wisdom saving throws for 7 days',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.wis',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.wis',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        ...this._blinded.changes,
      ],
    });
  }

  get _contagionFilthFever() {
    return new Effect({
      name: 'Filth Fever',
      description:
        'Disadvantage on strength checks strength saving throws, and attacks that use strength for 7 days',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _contagionFleshRot() {
    return new Effect({
      name: 'Flesh Rot',
      description:
        'Disadvantage on charisma checks and vulnerability to all damage',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.cha',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.traits.dv.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagionMindfire() {
    return new Effect({
      name: 'Mindfire',
      description:
        'Disadvantage on intelligence checks and intelligence saving throws for 7 days',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.int',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.int',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _contagionSeizure() {
    return new Effect({
      name: 'Seizure',
      description:
        'Disadvantage on dexterity checks, dexterity saving throws, and attacks that use dexterity for 7 days',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _contagionSlimyDoom() {
    return new Effect({
      name: 'Slimy Doom',
      description:
        'Disadvantage on constitution checks and constitution saving throws for 7 days',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.con',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.con',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _darkvision() {
    return new Effect({
      name: 'Darkvision',
      description: 'Upgrade darkvision to 60 ft. for 8 hours',
      icon: 'systems/dnd5e/icons/spells/evil-eye-red-1.jpg',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
      changes: [
        {
          key: 'data.attributes.senses.darkvision',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '60',
          priority: 5,
        },
      ],
      atlChanges: [
        {
          key: 'ATL.dimSight',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '60',
          priority: 5,
        },
      ],
    });
  }

  get _enlargeReduce() {
    return new Effect({
      name: 'Enlarge/Reduce',
      description: 'Choose between Enlarge or Reduce',
      icon: 'systems/dnd5e/icons/spells/link-blue-2.jpg',
      nestedEffects: [this._enlargeReduceEnlarge, this._enlargeReduceReduce],
    });
  }

  get _enlargeReduceEnlarge() {
    return new Effect({
      name: 'Enlarge',
      description:
        'Add 1d4 to damage and advantage on strength checks and strength saving throws for 1 minute',
      icon: 'systems/dnd5e/icons/spells/link-blue-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        // TODO data.traits.size
        {
          key: 'data.bonuses.weapon.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'flags.midi-qol.advantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _enlargeReduceReduce() {
    return new Effect({
      name: 'Reduce',
      description:
        'Subtract 1d4 from damage and disadvantage on strength checks and strength saving throws for 1 minute',
      icon: 'systems/dnd5e/icons/spells/link-blue-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        // TODO data.traits.size
        {
          key: 'data.bonuses.weapon.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _faerieFire() {
    return new Effect({
      name: 'Faerie Fire',
      description: 'Grants advantage to all who attack for 1 minute',
      icon: 'systems/dnd5e/icons/spells/fire-arrows-jade-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'ATL.dimLight',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: 'ATL.lightColor',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
      ],
      atlChanges: [
        {
          key: 'ATL.lightAlpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.lightAnimation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "pulse","speed": 1,"intensity": 1}',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'glow',
        },
      ],
    });
  }

  get _fly() {
    return new Effect({
      name: 'Fly',
      description: 'Upgrade flying speed to 60 ft. for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/link-spirit-1.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'data.attributes.movement.fly',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '60',
          priority: 5,
        },
      ],
    });
  }

  get _feeblemind() {
    return new Effect({
      name: 'Feeblemind',
      description: 'Set intelligence and charisma scores to 1 until removed',
      icon: 'systems/dnd5e/icons/spells/light-eerie-3.jpg',
      changes: [
        {
          key: 'data.abilities.int.value',
          mode: CONST.ACTIVE_EFFECT_MODES.DOWNGRADE,
          value: '1',
          priority: 5,
        },
        {
          key: 'data.abilities.cha.value',
          mode: CONST.ACTIVE_EFFECT_MODES.DOWNGRADE,
          value: '1',
          priority: 5,
        },
      ],
    });
  }

  get _fireShield() {
    return new Effect({
      name: 'Fire Shield',
      description: 'Choose between cold or fire resistance',
      icon: 'systems/dnd5e/icons/spells/protect-red-3.jpg',
      nestedEffects: [
        this._fireShieldColdResistance,
        this._fireShieldFireResistance,
      ],
    });
  }

  get _fireShieldColdResistance() {
    return new Effect({
      name: 'Fire Shield (Cold Resistance)',
      description: 'Add damage resistance to cold for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/protect-red-3.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'cold',
        },
      ],
      atlChanges: [
        {
          key: 'ATL.dimLight',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: 'ATL.brightLight',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: 'ATL.lightColor',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: 'ATL.lightAlpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.lightAnimation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch", "speed": 3, "intensity": 1}',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'fire',
        },
      ],
    });
  }

  get _fireShieldFireResistance() {
    return new Effect({
      name: 'Fire Shield (Fire Resistance)',
      description: 'Add damage resistance to fire for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/protect-red-3.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'fire',
        },
      ],
      atlChanges: [
        {
          key: 'ATL.dimLight',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: 'ATL.brightLight',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: 'ATL.lightColor',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.COLD_FIRE,
        },
        {
          key: 'ATL.lightAlpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.lightAnimation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch", "speed": 3, "intensity": 1}',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Fire v2 (coldfire)',
        },
      ],
    });
  }

  get _enhanceAbility() {
    return new Effect({
      name: 'Enhance Ability',
      description:
        "Choose between Bear's Endurance, Bull's Strength, Cat's Grace, Eagle's Splendor, Fox's Cunning, or Owl's Wisdom",
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      nestedEffects: [
        this._enhanceAbilityBearsEndurance,
        this._enhanceAbilityBullsStrength,
        this._enhanceAbilityCatsGrace,
        this._enhanceAbilityEaglesSplendor,
        this._enhanceAbilityFoxsCunning,
        this._enhanceAbilityOwlsWisdom,
      ],
    });
  }

  get _enhanceAbilityBearsEndurance() {
    return new Effect({
      name: "Bear's Endurance",
      description:
        'Advantage on constitution checks and 2d6 temp hit points (rolled automatically) for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isDynamic: true,
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.con',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityBullsStrength() {
    return new Effect({
      name: "Bull's Strength",
      description:
        'Advantage on strength checks and double maximum carrying capacity for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.attributes.encumbrance.max',
          mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
          value: '2',
          priority: 5,
        },
      ],
    });
  }

  get _enhanceAbilityCatsGrace() {
    return new Effect({
      name: "Cat's Grace",
      description: 'Advantage on dexterity checks for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityEaglesSplendor() {
    return new Effect({
      name: "Eagle's Splendor",
      description: 'Advantage on charisma checks for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.cha',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityFoxsCunning() {
    return new Effect({
      name: "Fox's Cunning",
      description: 'Advantage on intelligence checks for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.int',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityOwlsWisdom() {
    return new Effect({
      name: "Owl's Wisdom",
      description: 'Advantage on wisdom checks for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.wis',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _greaterInvisibility() {
    // TODO token magic effects
    return new Effect({
      name: 'Greater Invisibility',
      description:
        'Grants advantage on attack rolls while forcing disadvantage to all who attack for 1 minute',
      icon: 'systems/dnd5e/icons/spells/fog-water-air-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _guidance() {
    return new Effect({
      name: 'Guidance',
      description: 'Adds 1d4 to one ability or skill check for 1 minute',
      icon: 'systems/dnd5e/icons/spells/haste-sky-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      flags: {
        dae: {
          specialDuration: ['isCheck', 'isSkill'],
        },
      },
      changes: [
        {
          key: 'data.bonuses.abilities.check',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'data.attributes.init.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
      ],
    });
  }

  get _guidingBolt() {
    return new Effect({
      name: 'Guiding Bolt',
      description:
        'Grants advantage to next attacker or until the end of next turn',
      icon: 'systems/dnd5e/icons/spells/fireball-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_ROUND,
      turns: 1,
      flags: {
        dae: {
          specialDuration: ['isAttacked'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _haste() {
    return new Effect({
      name: 'Haste',
      description:
        'Double speed, add 2 to AC, and advantage on dexterity saving throws for 1 minute',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.attributes.ac.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '2',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*2',
          priority: 5,
        },
      ],
    });
  }

  get _heroism() {
    return new Effect({
      name: 'Heroism',
      description: 'Immunity to frightened for 1 minute',
      icon: 'systems/dnd5e/icons/spells/heal-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.traits.ci.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'frightened',
        },
      ],
    });
  }

  get _holyAura() {
    return new Effect({
      name: 'Holy Aura',
      description:
        'Advantage on saving throws, grant disadvantage to all who attack, and emit dim light in 5 radius (requires ATL) for 1 minute',
      icon: 'systems/dnd5e/icons/spells/haste-sky-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
      atlChanges: [
        {
          key: 'ATL.dimLight',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '5',
        },
        {
          key: 'ATL.lightColor',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: 'ATL.lightAlpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.lightAnimation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "sunburst", "speed": 2,"intensity": 4}',
        },
      ],
    });
  }

  get _huntersMark() {
    return new Effect({
      name: "Hunter's Mark",
      description: 'No active effects and lasts until removed (for now)',
      icon: 'systems/dnd5e/icons/spells/evil-eye-red-1.jpg',
    });
  }

  get _invisibility() {
    // TODO token magic effects
    return new Effect({
      name: 'Invisibility',
      description:
        'Grants advantage on next attack roll while forcing disadvantage to all who attack for 1 hour. Expires after 1 attack.',
      icon: 'systems/dnd5e/icons/spells/fog-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      flags: {
        dae: {
          specialDuration: ['1Attack', '1Spell'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _light() {
    return new Effect({
      name: 'Light',
      description: 'Emits 20/40 light for 1 hour (requires ATL)',
      icon: 'systems/dnd5e/icons/spells/light-sky-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      atlChanges: [
        {
          key: 'ATL.dimLight',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '40',
        },
        {
          key: 'ATL.brightLight',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: 'ATL.lightColor',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: 'ATL.lightAlpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.lightAnimation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "pulse", "speed": 3,"intensity": 1}',
        },
      ],
    });
  }

  get _longstrider() {
    return new Effect({
      name: 'Longstrider',
      description: 'Increase all movement by 10 ft. for 1 hour',
      icon: 'systems/dnd5e/icons/spells/wind-sky-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.attributes.movement.walk',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+10',
        },
      ],
      isDynamic: true,
    });
  }

  get _mageArmor() {
    return new Effect({
      name: 'Mage Armor',
      description: 'Upgrades armor to 13 + dex modifier for 8 hours',
      icon: 'systems/dnd5e/icons/spells/protect-blue-1.jpg',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
      changes: [
        {
          key: 'data.attributes.ac.value',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '13 + @abilities.dex.mod',
          priority: 5,
        },
      ],
    });
  }

  get _mindBlank() {
    return new Effect({
      name: 'Mind Blank',
      description: 'Adds immunity to psychic damage for 24 hours',
      icon: 'systems/dnd5e/icons/spells/air-burst-sky-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_DAY,
      changes: [
        {
          key: 'data.traits.di.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'psychic',
        },
      ],
    });
  }

  get _mirrorImage() {
    return new Effect({
      name: 'Mirror Image',
      description: 'No active effects, but lasts for 1 minute',
      icon: 'systems/dnd5e/icons/spells/wind-grasp-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'images',
        },
      ],
    });
  }

  get _passWithoutTrace() {
    // TODO token magic effects
    return new Effect({
      name: 'Pass without Trace',
      description: 'Add 10 to stealth checks for 1 hour',
      icon: 'systems/dnd5e/icons/spells/fog-air-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.skills.ste.mod',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+10',
        },
      ],
    });
  }

  get _protectionFromEnergy() {
    return new Effect({
      name: 'Protection from Energy',
      description:
        'Choose between acid, cold, fire, lightning, or thunder resistance',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      nestedEffects: [
        this._protectionFromEnergyAcid,
        this._protectionFromEnergyCold,
        this._protectionFromEnergyFire,
        this._protectionFromEnergyLightning,
        this._protectionFromEnergyThunder,
      ],
    });
  }

  get _protectionFromEnergyAcid() {
    // TODO token magic effects
    return new Effect({
      name: 'Protection from Acid',
      description: 'Adds damage resistance to acid for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'acid',
        },
      ],
    });
  }

  get _protectionFromEnergyCold() {
    // TODO token magic effects
    return new Effect({
      name: 'Protection from Cold',
      description: 'Adds damage resistance to cold for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'cold',
        },
      ],
    });
  }

  get _protectionFromEnergyFire() {
    // TODO token magic effects
    return new Effect({
      name: 'Protection from Fire',
      description: 'Adds damage resistance to fire for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'fire',
        },
      ],
    });
  }

  get _protectionFromEnergyLightning() {
    // TODO token magic effects
    return new Effect({
      name: 'Protection from Lightning',
      description: 'Adds damage resistance to lightning for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'lightning',
        },
      ],
    });
  }

  get _protectionFromEnergyThunder() {
    // TODO token magic effects
    return new Effect({
      name: 'Protection from Thunder',
      description: 'Adds damage resistance to thunder for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'thunder',
        },
      ],
    });
  }

  get _protectionFromPoison() {
    // TODO token magic effects
    return new Effect({
      name: 'Protection from Poison',
      description:
        'Adds resistance to poison for 1 hour (does not grant automatic advantage on saving throws against poison)',
      icon: 'systems/dnd5e/icons/spells/protect-acid-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD, // TODO
          value: 'poison',
        },
      ],
    });
  }

  get _shield() {
    return new Effect({
      name: 'Shield',
      description: 'Add 5 to AC until next turn',
      icon: 'systems/dnd5e/icons/spells/protect-magenta-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_ROUND,
      flags: {
        dae: {
          specialDuration: ['turnStart'],
        },
      },
      changes: [
        {
          key: 'data.attributes.ac.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+5',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'water-field',
        },
      ],
    });
  }

  get _shieldOfFaith() {
    return new Effect({
      name: 'Shield of Faith',
      description: 'Adds 2 to the AC for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/protect-sky-2.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'data.attributes.ac.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'bloom',
        },
      ],
    });
  }

  get _slow() {
    return new Effect({
      name: 'Slow',
      description:
        'Halves speed and and subtract 2 from AC and dexterity saving throws for 1 minute',
      icon: 'systems/dnd5e/icons/spells/fog-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.attributes.ac.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-2',
        },
        {
          key: 'data.abilities.dex.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-2',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 5,
        },
      ],
    });
  }

  get _spiderClimb() {
    return new Effect({
      name: 'Spider Climb',
      description: 'Grants climbing speed equal to walking speed for 1 hour',
      icon: 'systems/dnd5e/icons/spells/shielding-spirit-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.attributes.movement.climb',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '@attributes.movement.walk',
          priority: 5,
        },
      ],
    });
  }

  get _stoneskin() {
    // TODO token magic effects
    return new Effect({
      name: 'Stoneskin',
      description: 'Adds resistance to non-magical physical damage for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-orange-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'physical',
        },
      ],
    });
  }

  get _trueStrike() {
    return new Effect({
      name: 'True Strike',
      description:
        'Grants advantage on next attack or until the end of next turn',
      icon: 'systems/dnd5e/icons/spells/enchant-sky-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_ROUND,
      turns: 1,
      flags: {
        dae: {
          specialDuration: ['1Attack'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _viciousMockery() {
    return new Effect({
      name: 'Vicious Mockery',
      description:
        'Grants disadvantage on next attack or until the end of next turn',
      icon: 'systems/dnd5e/icons/skills/affliction_24.jpg',
      seconds: Constants.SECONDS.IN_ONE_ROUND,
      turns: 1,
      flags: {
        dae: {
          specialDuration: ['1Attack'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  /** Class specific */
  get _bardicInspiration() {
    return new Effect({
      name: 'Bardic Inspiration',
      description:
        'Add a dice to a single ability check, attack roll, or saving throw in the next 10 minutes',
      icon: 'systems/dnd5e/icons/skills/yellow_08.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      nestedEffects: [
        this._bardicInspirationD6,
        this._bardicInspirationD8,
        this._bardicInspirationD10,
        this._bardicInspirationD12,
      ],
    });
  }

  get _bardicInspirationD6() {
    return new Effect({
      name: 'Bardic Inspiration (d6)',
      description: 'For bards from level 1 to level 4',
      icon: 'systems/dnd5e/icons/skills/yellow_08.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.label',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Bardic Inspiration',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d6',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d6',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.check',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d6',
        },
      ],
    });
  }

  get _bardicInspirationD8() {
    return new Effect({
      name: 'Bardic Inspiration (d8)',
      description: 'For bards from level 5 to level 9',
      icon: 'systems/dnd5e/icons/skills/yellow_08.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.label',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Bardic Inspiration',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d8',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d8',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.check',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d8',
        },
      ],
    });
  }

  get _bardicInspirationD10() {
    return new Effect({
      name: 'Bardic Inspiration (d10)',
      description: 'For bards from level 10 to level 14',
      icon: 'systems/dnd5e/icons/skills/yellow_08.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.label',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Bardic Inspiration',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d10',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d10',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.check',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d10',
        },
      ],
    });
  }

  get _bardicInspirationD12() {
    return new Effect({
      name: 'Bardic Inspiration (d12)',
      description: 'For bards from level 15 to level 20',
      icon: 'systems/dnd5e/icons/skills/yellow_08.jpg',
      isViewable: false,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.label',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Bardic Inspiration',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d12',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d12',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.check',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d12',
        },
      ],
    });
  }

  get _channelDivinitySacredWeapon() {
    return new Effect({
      name: 'Channel Divinity: Sacred Weapon',
      description:
        'Add charisma modifier (minimum +1) to all weapon attack rolls and emits 20/40 light for 1 minute (requires ATL)',
      icon: 'systems/dnd5e/icons/skills/light_05.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+max(1, @abilities.cha.mod)',
        },
        {
          key: 'data.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+max(1, @abilities.cha.mod)',
        },
      ],
      atlChanges: [
        {
          key: 'ATL.dimLight',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '40',
        },
        {
          key: 'ATL.brightLight',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: 'ATL.lightColor',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: 'ATL.lightAlpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.lightAnimation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "sunburst", "speed": 2,"intensity": 4}',
        },
      ],
    });
  }

  get _channelDivinityTurnUndead() {
    return new Effect({
      name: 'Channel Divinity: Turn Undead',
      description: 'No active effects, but lasts for 1 minute',
      icon: 'systems/dnd5e/icons/skills/yellow_19.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
    });
  }

  get _rage() {
    return new Effect({
      name: 'Rage',
      description:
        'Advantage on strength checks and strength saving throws, a variable bonus to melee damage based on barbarian level, and resistance to piercing, bludgeoning, and slashing damage for 1 minute. Also handles Path of the Totem Warrior resistances.',
      icon: 'systems/dnd5e/icons/skills/red_10.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      isDynamic: true,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'slashing',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'piercing',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'bludgeoning',
        },
      ],
    });
  }

  get _recklessAttack() {
    return new Effect({
      name: 'Reckless Attack',
      description:
        'Advantage on melee attacks and grants advantage to those who attack for 1 turn',
      icon: 'systems/dnd5e/icons/skills/weapon_34.jpg',
      seconds: Constants.SECONDS.IN_ONE_ROUND,
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  /* Other effects */
  get _coverHalf() {
    return new Effect({
      name: 'Cover (Half)',
      description: 'Adds 2 to AC and dexterity saving throws',
      icon: 'modules/dfreds-convenient-effects/images/broken-wall.svg',
      changes: [
        {
          key: 'data.attributes.ac.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
        {
          key: 'data.abilities.dex.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
      ],
    });
  }

  get _coverThreeQuarters() {
    return new Effect({
      name: 'Cover (Three-Quarters)',
      description: 'Adds 5 to AC and dexterity saving throws',
      icon: 'modules/dfreds-convenient-effects/images/brick-wall.svg',
      changes: [
        {
          key: 'data.attributes.ac.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+5',
        },
        {
          key: 'data.abilities.dex.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+5',
        },
      ],
    });
  }

  get _encumbered() {
    return new Effect({
      name: 'Encumbered',
      description: 'Lowers movement by 10 ft.',
      icon: 'icons/svg/down.svg',
      isDynamic: true,
    });
  }

  get _dodge() {
    return new Effect({
      name: 'Dodge',
      description:
        'Grants disadvantage to all who attack and advantage on all dexterity saving throws until next turn',
      icon: 'modules/dfreds-convenient-effects/images/dodging.svg',
      flags: {
        dae: {
          specialDuration: ['turnStart'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _flanked() {
    return new Effect({
      name: 'Flanked',
      description: 'Grants advantage to all who melee attack',
      icon: 'modules/dfreds-convenient-effects/images/encirclement.svg',
      changes: [
        {
          key: 'flags.midi-qol.grants.advantage.attack.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.msak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _flanking() {
    return new Effect({
      name: 'Flanking',
      description: 'Grants advantage on melee attack rolls',
      icon: 'icons/svg/sword.svg',
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.attack.msak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _greatWeaponMaster() {
    return new Effect({
      name: 'Great Weapon Master',
      description: 'Subtracts 5 from melee attacks but adds 10 to melee damage',
      icon: 'systems/dnd5e/icons/skills/red_05.jpg',
      changes: [
        {
          key: 'data.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-5',
        },
        {
          key: 'data.bonuses.mwak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+10',
        },
      ],
    });
  }

  get _heavilyEncumbered() {
    return new Effect({
      name: 'Heavily Encumbered',
      description:
        'Lowers movement by 20 ft., disadvantage on all attack rolls, and disadvantage on strength, dexterity, and constitution saves',
      icon: 'icons/svg/downgrade.svg',
      isDynamic: true,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.con',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _rangedDisadvantage() {
    return new Effect({
      name: 'Ranged Disadvantage',
      description: 'Disadvantage on ranged attack rolls',
      icon: 'modules/dfreds-convenient-effects/images/broken-arrow.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.rwak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.rsak',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '1',
        },
      ],
    });
  }

  get _sharpshooter() {
    return new Effect({
      name: 'Sharpshooter',
      description:
        'Subtracts 5 from ranged attacks but adds 10 to ranged damage',
      icon: 'systems/dnd5e/icons/skills/green_01.jpg',
      changes: [
        {
          key: 'data.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-5',
        },
        {
          key: 'data.bonuses.rwak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+10',
        },
      ],
    });
  }
}
