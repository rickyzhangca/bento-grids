/**
 * handy theme reference helper object
 */
export const fromTheme = {
  animation: {
    easeOutCubic: 'animation.easeOutCubic',
  },
  borderWidths: {
    '0': 'borderWidths.0',
    '1': 'borderWidths.1',
  },
  breakpoints: {
    '0': 'breakpoints.0',
    '1': 'breakpoints.1',
    '2': 'breakpoints.2',
    '3': 'breakpoints.3',
  },
  fonts: {
    normal: 'fonts.normal',
    mono: 'fonts.mono',
  },
  fontSizes: {
    '0': 'fontSizes.0',
    '1': 'fontSizes.1',
    '2': 'fontSizes.2',
    '3': 'fontSizes.3',
    '4': 'fontSizes.4',
    '5': 'fontSizes.5',
    '6': 'fontSizes.6',
    '7': 'fontSizes.7',
  },
  fontWeights: {
    light: 'fontWeights.light',
    normal: 'fontWeights.normal',
    semibold: 'fontWeights.semibold',
    bold: 'fontWeights.bold',
  },
  lineHeights: {
    condensedUltra: 'lineHeights.condensedUltra',
    condensed: 'lineHeights.condensed',
    default: 'lineHeights.default',
  },
  radii: {
    '0': 'radii.0',
    '1': 'radii.1',
    '2': 'radii.2',
    '3': 'radii.3',
  },
  sizes: {
    small: 'sizes.small',
    medium: 'sizes.medium',
    large: 'sizes.large',
    xlarge: 'sizes.xlarge',
  },
  space: {
    '0': 'space.0',
    '1': 'space.1',
    '2': 'space.2',
    '3': 'space.3',
    '4': 'space.4',
    '5': 'space.5',
    '6': 'space.6',
    '7': 'space.7',
    '8': 'space.8',
    '9': 'space.9',
    '10': 'space.10',
    '11': 'space.11',
    '12': 'space.12',
  },
  colorSchemes: {
    light: {
      colors: {
        canvasDefaultTransparent:
          'colorSchemes.light.colors.canvasDefaultTransparent',
        pageHeaderBg: 'colorSchemes.light.colors.pageHeaderBg',
        marketingIcon: {
          primary: 'colorSchemes.light.colors.marketingIcon.primary',
          secondary: 'colorSchemes.light.colors.marketingIcon.secondary',
        },
        diffBlob: {
          addition: {
            numText: 'colorSchemes.light.colors.diffBlob.addition.numText',
            fg: 'colorSchemes.light.colors.diffBlob.addition.fg',
            numBg: 'colorSchemes.light.colors.diffBlob.addition.numBg',
            lineBg: 'colorSchemes.light.colors.diffBlob.addition.lineBg',
            wordBg: 'colorSchemes.light.colors.diffBlob.addition.wordBg',
          },
          deletion: {
            numText: 'colorSchemes.light.colors.diffBlob.deletion.numText',
            fg: 'colorSchemes.light.colors.diffBlob.deletion.fg',
            numBg: 'colorSchemes.light.colors.diffBlob.deletion.numBg',
            lineBg: 'colorSchemes.light.colors.diffBlob.deletion.lineBg',
            wordBg: 'colorSchemes.light.colors.diffBlob.deletion.wordBg',
          },
          hunk: {
            numBg: 'colorSchemes.light.colors.diffBlob.hunk.numBg',
          },
          expander: {
            icon: 'colorSchemes.light.colors.diffBlob.expander.icon',
          },
        },
        diffstat: {
          deletionBorder: 'colorSchemes.light.colors.diffstat.deletionBorder',
          additionBorder: 'colorSchemes.light.colors.diffstat.additionBorder',
          additionBg: 'colorSchemes.light.colors.diffstat.additionBg',
        },
        searchKeyword: {
          hl: 'colorSchemes.light.colors.searchKeyword.hl',
        },
        prettylights: {
          syntax: {
            comment: 'colorSchemes.light.colors.prettylights.syntax.comment',
            constant: 'colorSchemes.light.colors.prettylights.syntax.constant',
            entity: 'colorSchemes.light.colors.prettylights.syntax.entity',
            storageModifierImport:
              'colorSchemes.light.colors.prettylights.syntax.storageModifierImport',
            entityTag:
              'colorSchemes.light.colors.prettylights.syntax.entityTag',
            keyword: 'colorSchemes.light.colors.prettylights.syntax.keyword',
            string: 'colorSchemes.light.colors.prettylights.syntax.string',
            variable: 'colorSchemes.light.colors.prettylights.syntax.variable',
            brackethighlighterUnmatched:
              'colorSchemes.light.colors.prettylights.syntax.brackethighlighterUnmatched',
            invalidIllegalText:
              'colorSchemes.light.colors.prettylights.syntax.invalidIllegalText',
            invalidIllegalBg:
              'colorSchemes.light.colors.prettylights.syntax.invalidIllegalBg',
            carriageReturnText:
              'colorSchemes.light.colors.prettylights.syntax.carriageReturnText',
            carriageReturnBg:
              'colorSchemes.light.colors.prettylights.syntax.carriageReturnBg',
            stringRegexp:
              'colorSchemes.light.colors.prettylights.syntax.stringRegexp',
            markupList:
              'colorSchemes.light.colors.prettylights.syntax.markupList',
            markupHeading:
              'colorSchemes.light.colors.prettylights.syntax.markupHeading',
            markupItalic:
              'colorSchemes.light.colors.prettylights.syntax.markupItalic',
            markupBold:
              'colorSchemes.light.colors.prettylights.syntax.markupBold',
            markupDeletedText:
              'colorSchemes.light.colors.prettylights.syntax.markupDeletedText',
            markupDeletedBg:
              'colorSchemes.light.colors.prettylights.syntax.markupDeletedBg',
            markupInsertedText:
              'colorSchemes.light.colors.prettylights.syntax.markupInsertedText',
            markupInsertedBg:
              'colorSchemes.light.colors.prettylights.syntax.markupInsertedBg',
            markupChangedText:
              'colorSchemes.light.colors.prettylights.syntax.markupChangedText',
            markupChangedBg:
              'colorSchemes.light.colors.prettylights.syntax.markupChangedBg',
            markupIgnoredText:
              'colorSchemes.light.colors.prettylights.syntax.markupIgnoredText',
            markupIgnoredBg:
              'colorSchemes.light.colors.prettylights.syntax.markupIgnoredBg',
            metaDiffRange:
              'colorSchemes.light.colors.prettylights.syntax.metaDiffRange',
            brackethighlighterAngle:
              'colorSchemes.light.colors.prettylights.syntax.brackethighlighterAngle',
            sublimelinterGutterMark:
              'colorSchemes.light.colors.prettylights.syntax.sublimelinterGutterMark',
            constantOtherReferenceLink:
              'colorSchemes.light.colors.prettylights.syntax.constantOtherReferenceLink',
          },
        },
        codemirror: {
          text: 'colorSchemes.light.colors.codemirror.text',
          bg: 'colorSchemes.light.colors.codemirror.bg',
          guttersBg: 'colorSchemes.light.colors.codemirror.guttersBg',
          guttermarkerText:
            'colorSchemes.light.colors.codemirror.guttermarkerText',
          guttermarkerSubtleText:
            'colorSchemes.light.colors.codemirror.guttermarkerSubtleText',
          linenumberText: 'colorSchemes.light.colors.codemirror.linenumberText',
          cursor: 'colorSchemes.light.colors.codemirror.cursor',
          selectionBg: 'colorSchemes.light.colors.codemirror.selectionBg',
          activelineBg: 'colorSchemes.light.colors.codemirror.activelineBg',
          matchingbracketText:
            'colorSchemes.light.colors.codemirror.matchingbracketText',
          linesBg: 'colorSchemes.light.colors.codemirror.linesBg',
          syntax: {
            comment: 'colorSchemes.light.colors.codemirror.syntax.comment',
            constant: 'colorSchemes.light.colors.codemirror.syntax.constant',
            entity: 'colorSchemes.light.colors.codemirror.syntax.entity',
            keyword: 'colorSchemes.light.colors.codemirror.syntax.keyword',
            storage: 'colorSchemes.light.colors.codemirror.syntax.storage',
            string: 'colorSchemes.light.colors.codemirror.syntax.string',
            support: 'colorSchemes.light.colors.codemirror.syntax.support',
            variable: 'colorSchemes.light.colors.codemirror.syntax.variable',
          },
        },
        checks: {
          bg: 'colorSchemes.light.colors.checks.bg',
          textPrimary: 'colorSchemes.light.colors.checks.textPrimary',
          textSecondary: 'colorSchemes.light.colors.checks.textSecondary',
          textLink: 'colorSchemes.light.colors.checks.textLink',
          btnIcon: 'colorSchemes.light.colors.checks.btnIcon',
          btnHoverIcon: 'colorSchemes.light.colors.checks.btnHoverIcon',
          btnHoverBg: 'colorSchemes.light.colors.checks.btnHoverBg',
          inputText: 'colorSchemes.light.colors.checks.inputText',
          inputPlaceholderText:
            'colorSchemes.light.colors.checks.inputPlaceholderText',
          inputFocusText: 'colorSchemes.light.colors.checks.inputFocusText',
          inputBg: 'colorSchemes.light.colors.checks.inputBg',
          donutError: 'colorSchemes.light.colors.checks.donutError',
          donutPending: 'colorSchemes.light.colors.checks.donutPending',
          donutSuccess: 'colorSchemes.light.colors.checks.donutSuccess',
          donutNeutral: 'colorSchemes.light.colors.checks.donutNeutral',
          dropdownText: 'colorSchemes.light.colors.checks.dropdownText',
          dropdownBg: 'colorSchemes.light.colors.checks.dropdownBg',
          dropdownBorder: 'colorSchemes.light.colors.checks.dropdownBorder',
          dropdownShadow: 'colorSchemes.light.colors.checks.dropdownShadow',
          dropdownHoverText:
            'colorSchemes.light.colors.checks.dropdownHoverText',
          dropdownHoverBg: 'colorSchemes.light.colors.checks.dropdownHoverBg',
          dropdownBtnHoverText:
            'colorSchemes.light.colors.checks.dropdownBtnHoverText',
          dropdownBtnHoverBg:
            'colorSchemes.light.colors.checks.dropdownBtnHoverBg',
          scrollbarThumbBg: 'colorSchemes.light.colors.checks.scrollbarThumbBg',
          headerLabelText: 'colorSchemes.light.colors.checks.headerLabelText',
          headerLabelOpenText:
            'colorSchemes.light.colors.checks.headerLabelOpenText',
          headerBorder: 'colorSchemes.light.colors.checks.headerBorder',
          headerIcon: 'colorSchemes.light.colors.checks.headerIcon',
          lineText: 'colorSchemes.light.colors.checks.lineText',
          lineNumText: 'colorSchemes.light.colors.checks.lineNumText',
          lineTimestampText:
            'colorSchemes.light.colors.checks.lineTimestampText',
          lineHoverBg: 'colorSchemes.light.colors.checks.lineHoverBg',
          lineSelectedBg: 'colorSchemes.light.colors.checks.lineSelectedBg',
          lineSelectedNumText:
            'colorSchemes.light.colors.checks.lineSelectedNumText',
          lineDtFmText: 'colorSchemes.light.colors.checks.lineDtFmText',
          lineDtFmBg: 'colorSchemes.light.colors.checks.lineDtFmBg',
          gateBg: 'colorSchemes.light.colors.checks.gateBg',
          gateText: 'colorSchemes.light.colors.checks.gateText',
          gateWaitingText: 'colorSchemes.light.colors.checks.gateWaitingText',
          stepHeaderOpenBg: 'colorSchemes.light.colors.checks.stepHeaderOpenBg',
          stepErrorText: 'colorSchemes.light.colors.checks.stepErrorText',
          stepWarningText: 'colorSchemes.light.colors.checks.stepWarningText',
          loglineText: 'colorSchemes.light.colors.checks.loglineText',
          loglineNumText: 'colorSchemes.light.colors.checks.loglineNumText',
          loglineDebugText: 'colorSchemes.light.colors.checks.loglineDebugText',
          loglineErrorText: 'colorSchemes.light.colors.checks.loglineErrorText',
          loglineErrorNumText:
            'colorSchemes.light.colors.checks.loglineErrorNumText',
          loglineErrorBg: 'colorSchemes.light.colors.checks.loglineErrorBg',
          loglineWarningText:
            'colorSchemes.light.colors.checks.loglineWarningText',
          loglineWarningNumText:
            'colorSchemes.light.colors.checks.loglineWarningNumText',
          loglineWarningBg: 'colorSchemes.light.colors.checks.loglineWarningBg',
          loglineCommandText:
            'colorSchemes.light.colors.checks.loglineCommandText',
          loglineSectionText:
            'colorSchemes.light.colors.checks.loglineSectionText',
          ansi: {
            black: 'colorSchemes.light.colors.checks.ansi.black',
            blackBright: 'colorSchemes.light.colors.checks.ansi.blackBright',
            white: 'colorSchemes.light.colors.checks.ansi.white',
            whiteBright: 'colorSchemes.light.colors.checks.ansi.whiteBright',
            gray: 'colorSchemes.light.colors.checks.ansi.gray',
            red: 'colorSchemes.light.colors.checks.ansi.red',
            redBright: 'colorSchemes.light.colors.checks.ansi.redBright',
            green: 'colorSchemes.light.colors.checks.ansi.green',
            greenBright: 'colorSchemes.light.colors.checks.ansi.greenBright',
            yellow: 'colorSchemes.light.colors.checks.ansi.yellow',
            yellowBright: 'colorSchemes.light.colors.checks.ansi.yellowBright',
            blue: 'colorSchemes.light.colors.checks.ansi.blue',
            blueBright: 'colorSchemes.light.colors.checks.ansi.blueBright',
            magenta: 'colorSchemes.light.colors.checks.ansi.magenta',
            magentaBright:
              'colorSchemes.light.colors.checks.ansi.magentaBright',
            cyan: 'colorSchemes.light.colors.checks.ansi.cyan',
            cyanBright: 'colorSchemes.light.colors.checks.ansi.cyanBright',
          },
        },
        project: {
          headerBg: 'colorSchemes.light.colors.project.headerBg',
          sidebarBg: 'colorSchemes.light.colors.project.sidebarBg',
          gradientIn: 'colorSchemes.light.colors.project.gradientIn',
          gradientOut: 'colorSchemes.light.colors.project.gradientOut',
        },
        mktg: {
          btn: {
            bg: 'colorSchemes.light.colors.mktg.btn.bg',
          },
        },
        control: {
          borderColor: {
            emphasis: 'colorSchemes.light.colors.control.borderColor.emphasis',
          },
        },
        avatar: {
          bg: 'colorSchemes.light.colors.avatar.bg',
          border: 'colorSchemes.light.colors.avatar.border',
          stackFade: 'colorSchemes.light.colors.avatar.stackFade',
          stackFadeMore: 'colorSchemes.light.colors.avatar.stackFadeMore',
        },
        topicTag: {
          border: 'colorSchemes.light.colors.topicTag.border',
        },
        counter: {
          border: 'colorSchemes.light.colors.counter.border',
        },
        selectMenu: {
          backdropBorder: 'colorSchemes.light.colors.selectMenu.backdropBorder',
          tapHighlight: 'colorSchemes.light.colors.selectMenu.tapHighlight',
          tapFocusBg: 'colorSchemes.light.colors.selectMenu.tapFocusBg',
        },
        header: {
          text: 'colorSchemes.light.colors.header.text',
          bg: 'colorSchemes.light.colors.header.bg',
          divider: 'colorSchemes.light.colors.header.divider',
          logo: 'colorSchemes.light.colors.header.logo',
        },
        headerSearch: {
          bg: 'colorSchemes.light.colors.headerSearch.bg',
          border: 'colorSchemes.light.colors.headerSearch.border',
        },
        sidenav: {
          selectedBg: 'colorSchemes.light.colors.sidenav.selectedBg',
        },
        menu: {
          bgActive: 'colorSchemes.light.colors.menu.bgActive',
        },
        input: {
          disabledBg: 'colorSchemes.light.colors.input.disabledBg',
        },
        timeline: {
          badgeBg: 'colorSchemes.light.colors.timeline.badgeBg',
        },
        ansi: {
          black: 'colorSchemes.light.colors.ansi.black',
          blackBright: 'colorSchemes.light.colors.ansi.blackBright',
          white: 'colorSchemes.light.colors.ansi.white',
          whiteBright: 'colorSchemes.light.colors.ansi.whiteBright',
          gray: 'colorSchemes.light.colors.ansi.gray',
          red: 'colorSchemes.light.colors.ansi.red',
          redBright: 'colorSchemes.light.colors.ansi.redBright',
          green: 'colorSchemes.light.colors.ansi.green',
          greenBright: 'colorSchemes.light.colors.ansi.greenBright',
          yellow: 'colorSchemes.light.colors.ansi.yellow',
          yellowBright: 'colorSchemes.light.colors.ansi.yellowBright',
          blue: 'colorSchemes.light.colors.ansi.blue',
          blueBright: 'colorSchemes.light.colors.ansi.blueBright',
          magenta: 'colorSchemes.light.colors.ansi.magenta',
          magentaBright: 'colorSchemes.light.colors.ansi.magentaBright',
          cyan: 'colorSchemes.light.colors.ansi.cyan',
          cyanBright: 'colorSchemes.light.colors.ansi.cyanBright',
        },
        btn: {
          text: 'colorSchemes.light.colors.btn.text',
          bg: 'colorSchemes.light.colors.btn.bg',
          border: 'colorSchemes.light.colors.btn.border',
          hoverBg: 'colorSchemes.light.colors.btn.hoverBg',
          hoverBorder: 'colorSchemes.light.colors.btn.hoverBorder',
          activeBg: 'colorSchemes.light.colors.btn.activeBg',
          activeBorder: 'colorSchemes.light.colors.btn.activeBorder',
          selectedBg: 'colorSchemes.light.colors.btn.selectedBg',
          counterBg: 'colorSchemes.light.colors.btn.counterBg',
          primary: {
            text: 'colorSchemes.light.colors.btn.primary.text',
            bg: 'colorSchemes.light.colors.btn.primary.bg',
            border: 'colorSchemes.light.colors.btn.primary.border',
            hoverBg: 'colorSchemes.light.colors.btn.primary.hoverBg',
            hoverBorder: 'colorSchemes.light.colors.btn.primary.hoverBorder',
            selectedBg: 'colorSchemes.light.colors.btn.primary.selectedBg',
            disabledText: 'colorSchemes.light.colors.btn.primary.disabledText',
            disabledBg: 'colorSchemes.light.colors.btn.primary.disabledBg',
            disabledBorder:
              'colorSchemes.light.colors.btn.primary.disabledBorder',
            icon: 'colorSchemes.light.colors.btn.primary.icon',
            counterBg: 'colorSchemes.light.colors.btn.primary.counterBg',
          },
          outline: {
            text: 'colorSchemes.light.colors.btn.outline.text',
            hoverText: 'colorSchemes.light.colors.btn.outline.hoverText',
            hoverBg: 'colorSchemes.light.colors.btn.outline.hoverBg',
            hoverBorder: 'colorSchemes.light.colors.btn.outline.hoverBorder',
            hoverCounterBg:
              'colorSchemes.light.colors.btn.outline.hoverCounterBg',
            selectedText: 'colorSchemes.light.colors.btn.outline.selectedText',
            selectedBg: 'colorSchemes.light.colors.btn.outline.selectedBg',
            selectedBorder:
              'colorSchemes.light.colors.btn.outline.selectedBorder',
            disabledText: 'colorSchemes.light.colors.btn.outline.disabledText',
            disabledBg: 'colorSchemes.light.colors.btn.outline.disabledBg',
            disabledCounterBg:
              'colorSchemes.light.colors.btn.outline.disabledCounterBg',
            counterBg: 'colorSchemes.light.colors.btn.outline.counterBg',
          },
          danger: {
            text: 'colorSchemes.light.colors.btn.danger.text',
            hoverText: 'colorSchemes.light.colors.btn.danger.hoverText',
            hoverBg: 'colorSchemes.light.colors.btn.danger.hoverBg',
            hoverBorder: 'colorSchemes.light.colors.btn.danger.hoverBorder',
            hoverCounterBg:
              'colorSchemes.light.colors.btn.danger.hoverCounterBg',
            selectedText: 'colorSchemes.light.colors.btn.danger.selectedText',
            selectedBg: 'colorSchemes.light.colors.btn.danger.selectedBg',
            selectedBorder:
              'colorSchemes.light.colors.btn.danger.selectedBorder',
            disabledText: 'colorSchemes.light.colors.btn.danger.disabledText',
            disabledBg: 'colorSchemes.light.colors.btn.danger.disabledBg',
            disabledCounterBg:
              'colorSchemes.light.colors.btn.danger.disabledCounterBg',
            counterBg: 'colorSchemes.light.colors.btn.danger.counterBg',
            icon: 'colorSchemes.light.colors.btn.danger.icon',
            hoverIcon: 'colorSchemes.light.colors.btn.danger.hoverIcon',
          },
        },
        underlinenav: {
          icon: 'colorSchemes.light.colors.underlinenav.icon',
          borderHover: 'colorSchemes.light.colors.underlinenav.borderHover',
        },
        actionListItem: {
          inlineDivider:
            'colorSchemes.light.colors.actionListItem.inlineDivider',
          default: {
            hoverBg: 'colorSchemes.light.colors.actionListItem.default.hoverBg',
            hoverBorder:
              'colorSchemes.light.colors.actionListItem.default.hoverBorder',
            activeBg:
              'colorSchemes.light.colors.actionListItem.default.activeBg',
            activeBorder:
              'colorSchemes.light.colors.actionListItem.default.activeBorder',
            selectedBg:
              'colorSchemes.light.colors.actionListItem.default.selectedBg',
          },
          danger: {
            hoverBg: 'colorSchemes.light.colors.actionListItem.danger.hoverBg',
            activeBg:
              'colorSchemes.light.colors.actionListItem.danger.activeBg',
            hoverText:
              'colorSchemes.light.colors.actionListItem.danger.hoverText',
          },
        },
        switchTrack: {
          bg: 'colorSchemes.light.colors.switchTrack.bg',
          hoverBg: 'colorSchemes.light.colors.switchTrack.hoverBg',
          activeBg: 'colorSchemes.light.colors.switchTrack.activeBg',
          disabledBg: 'colorSchemes.light.colors.switchTrack.disabledBg',
          fg: 'colorSchemes.light.colors.switchTrack.fg',
          disabledFg: 'colorSchemes.light.colors.switchTrack.disabledFg',
          border: 'colorSchemes.light.colors.switchTrack.border',
          checked: {
            bg: 'colorSchemes.light.colors.switchTrack.checked.bg',
            hoverBg: 'colorSchemes.light.colors.switchTrack.checked.hoverBg',
            activeBg: 'colorSchemes.light.colors.switchTrack.checked.activeBg',
            fg: 'colorSchemes.light.colors.switchTrack.checked.fg',
            disabledFg:
              'colorSchemes.light.colors.switchTrack.checked.disabledFg',
            border: 'colorSchemes.light.colors.switchTrack.checked.border',
          },
        },
        switchKnob: {
          bg: 'colorSchemes.light.colors.switchKnob.bg',
          disabledBg: 'colorSchemes.light.colors.switchKnob.disabledBg',
          border: 'colorSchemes.light.colors.switchKnob.border',
          checked: {
            bg: 'colorSchemes.light.colors.switchKnob.checked.bg',
            disabledBg:
              'colorSchemes.light.colors.switchKnob.checked.disabledBg',
            border: 'colorSchemes.light.colors.switchKnob.checked.border',
          },
        },
        segmentedControl: {
          bg: 'colorSchemes.light.colors.segmentedControl.bg',
          button: {
            bg: 'colorSchemes.light.colors.segmentedControl.button.bg',
            hover: {
              bg: 'colorSchemes.light.colors.segmentedControl.button.hover.bg',
            },
            active: {
              bg: 'colorSchemes.light.colors.segmentedControl.button.active.bg',
            },
            selected: {
              border:
                'colorSchemes.light.colors.segmentedControl.button.selected.border',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg: 'colorSchemes.light.colors.treeViewItem.chevron.hoverBg',
          },
          directory: {
            fill: 'colorSchemes.light.colors.treeViewItem.directory.fill',
          },
        },
        fg: {
          default: 'colorSchemes.light.colors.fg.default',
          muted: 'colorSchemes.light.colors.fg.muted',
          subtle: 'colorSchemes.light.colors.fg.subtle',
          onEmphasis: 'colorSchemes.light.colors.fg.onEmphasis',
        },
        canvas: {
          default: 'colorSchemes.light.colors.canvas.default',
          overlay: 'colorSchemes.light.colors.canvas.overlay',
          inset: 'colorSchemes.light.colors.canvas.inset',
          subtle: 'colorSchemes.light.colors.canvas.subtle',
        },
        border: {
          default: 'colorSchemes.light.colors.border.default',
          muted: 'colorSchemes.light.colors.border.muted',
          subtle: 'colorSchemes.light.colors.border.subtle',
        },
        neutral: {
          emphasisPlus: 'colorSchemes.light.colors.neutral.emphasisPlus',
          emphasis: 'colorSchemes.light.colors.neutral.emphasis',
          muted: 'colorSchemes.light.colors.neutral.muted',
          subtle: 'colorSchemes.light.colors.neutral.subtle',
        },
        accent: {
          fg: 'colorSchemes.light.colors.accent.fg',
          emphasis: 'colorSchemes.light.colors.accent.emphasis',
          muted: 'colorSchemes.light.colors.accent.muted',
          subtle: 'colorSchemes.light.colors.accent.subtle',
        },
        success: {
          fg: 'colorSchemes.light.colors.success.fg',
          emphasis: 'colorSchemes.light.colors.success.emphasis',
          muted: 'colorSchemes.light.colors.success.muted',
          subtle: 'colorSchemes.light.colors.success.subtle',
        },
        attention: {
          fg: 'colorSchemes.light.colors.attention.fg',
          emphasis: 'colorSchemes.light.colors.attention.emphasis',
          muted: 'colorSchemes.light.colors.attention.muted',
          subtle: 'colorSchemes.light.colors.attention.subtle',
        },
        severe: {
          fg: 'colorSchemes.light.colors.severe.fg',
          emphasis: 'colorSchemes.light.colors.severe.emphasis',
          muted: 'colorSchemes.light.colors.severe.muted',
          subtle: 'colorSchemes.light.colors.severe.subtle',
        },
        danger: {
          fg: 'colorSchemes.light.colors.danger.fg',
          emphasis: 'colorSchemes.light.colors.danger.emphasis',
          muted: 'colorSchemes.light.colors.danger.muted',
          subtle: 'colorSchemes.light.colors.danger.subtle',
        },
        open: {
          fg: 'colorSchemes.light.colors.open.fg',
          emphasis: 'colorSchemes.light.colors.open.emphasis',
          muted: 'colorSchemes.light.colors.open.muted',
          subtle: 'colorSchemes.light.colors.open.subtle',
        },
        closed: {
          fg: 'colorSchemes.light.colors.closed.fg',
          emphasis: 'colorSchemes.light.colors.closed.emphasis',
          muted: 'colorSchemes.light.colors.closed.muted',
          subtle: 'colorSchemes.light.colors.closed.subtle',
        },
        done: {
          fg: 'colorSchemes.light.colors.done.fg',
          emphasis: 'colorSchemes.light.colors.done.emphasis',
          muted: 'colorSchemes.light.colors.done.muted',
          subtle: 'colorSchemes.light.colors.done.subtle',
        },
        sponsors: {
          fg: 'colorSchemes.light.colors.sponsors.fg',
          emphasis: 'colorSchemes.light.colors.sponsors.emphasis',
          muted: 'colorSchemes.light.colors.sponsors.muted',
          subtle: 'colorSchemes.light.colors.sponsors.subtle',
        },
        primer: {
          fg: {
            disabled: 'colorSchemes.light.colors.primer.fg.disabled',
          },
          canvas: {
            backdrop: 'colorSchemes.light.colors.primer.canvas.backdrop',
            sticky: 'colorSchemes.light.colors.primer.canvas.sticky',
          },
          border: {
            active: 'colorSchemes.light.colors.primer.border.active',
            contrast: 'colorSchemes.light.colors.primer.border.contrast',
          },
        },
      },
      shadows: {
        mktg: {
          btn: {
            shadow: {
              outline: 'colorSchemes.light.shadows.mktg.btn.shadow.outline',
              focus: 'colorSchemes.light.shadows.mktg.btn.shadow.focus',
              hover: 'colorSchemes.light.shadows.mktg.btn.shadow.hover',
              hoverMuted:
                'colorSchemes.light.shadows.mktg.btn.shadow.hoverMuted',
            },
          },
        },
        avatar: {
          childShadow: 'colorSchemes.light.shadows.avatar.childShadow',
        },
        overlay: {
          shadow: 'colorSchemes.light.shadows.overlay.shadow',
        },
        btn: {
          shadow: 'colorSchemes.light.shadows.btn.shadow',
          insetShadow: 'colorSchemes.light.shadows.btn.insetShadow',
          primary: {
            shadow: 'colorSchemes.light.shadows.btn.primary.shadow',
            insetShadow: 'colorSchemes.light.shadows.btn.primary.insetShadow',
            selectedShadow:
              'colorSchemes.light.shadows.btn.primary.selectedShadow',
          },
          outline: {
            hoverShadow: 'colorSchemes.light.shadows.btn.outline.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.light.shadows.btn.outline.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.light.shadows.btn.outline.selectedShadow',
          },
          danger: {
            hoverShadow: 'colorSchemes.light.shadows.btn.danger.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.light.shadows.btn.danger.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.light.shadows.btn.danger.selectedShadow',
          },
        },
        shadow: {
          small: 'colorSchemes.light.shadows.shadow.small',
          medium: 'colorSchemes.light.shadows.shadow.medium',
          large: 'colorSchemes.light.shadows.shadow.large',
          extraLarge: 'colorSchemes.light.shadows.shadow.extraLarge',
        },
        primer: {
          shadow: {
            highlight: 'colorSchemes.light.shadows.primer.shadow.highlight',
            inset: 'colorSchemes.light.shadows.primer.shadow.inset',
          },
        },
      },
    },
    light_high_contrast: {
      colors: {
        canvasDefaultTransparent:
          'colorSchemes.light_high_contrast.colors.canvasDefaultTransparent',
        pageHeaderBg: 'colorSchemes.light_high_contrast.colors.pageHeaderBg',
        marketingIcon: {
          primary:
            'colorSchemes.light_high_contrast.colors.marketingIcon.primary',
          secondary:
            'colorSchemes.light_high_contrast.colors.marketingIcon.secondary',
        },
        diffBlob: {
          addition: {
            numText:
              'colorSchemes.light_high_contrast.colors.diffBlob.addition.numText',
            fg: 'colorSchemes.light_high_contrast.colors.diffBlob.addition.fg',
            numBg:
              'colorSchemes.light_high_contrast.colors.diffBlob.addition.numBg',
            lineBg:
              'colorSchemes.light_high_contrast.colors.diffBlob.addition.lineBg',
            wordBg:
              'colorSchemes.light_high_contrast.colors.diffBlob.addition.wordBg',
          },
          deletion: {
            numText:
              'colorSchemes.light_high_contrast.colors.diffBlob.deletion.numText',
            fg: 'colorSchemes.light_high_contrast.colors.diffBlob.deletion.fg',
            numBg:
              'colorSchemes.light_high_contrast.colors.diffBlob.deletion.numBg',
            lineBg:
              'colorSchemes.light_high_contrast.colors.diffBlob.deletion.lineBg',
            wordBg:
              'colorSchemes.light_high_contrast.colors.diffBlob.deletion.wordBg',
          },
          hunk: {
            numBg:
              'colorSchemes.light_high_contrast.colors.diffBlob.hunk.numBg',
          },
          expander: {
            icon: 'colorSchemes.light_high_contrast.colors.diffBlob.expander.icon',
          },
        },
        diffstat: {
          deletionBorder:
            'colorSchemes.light_high_contrast.colors.diffstat.deletionBorder',
          additionBorder:
            'colorSchemes.light_high_contrast.colors.diffstat.additionBorder',
          additionBg:
            'colorSchemes.light_high_contrast.colors.diffstat.additionBg',
        },
        searchKeyword: {
          hl: 'colorSchemes.light_high_contrast.colors.searchKeyword.hl',
        },
        prettylights: {
          syntax: {
            comment:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.comment',
            constant:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.constant',
            entity:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.entity',
            storageModifierImport:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.storageModifierImport',
            entityTag:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.entityTag',
            keyword:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.keyword',
            string:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.string',
            variable:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.variable',
            brackethighlighterUnmatched:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.brackethighlighterUnmatched',
            invalidIllegalText:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.invalidIllegalText',
            invalidIllegalBg:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.invalidIllegalBg',
            carriageReturnText:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.carriageReturnText',
            carriageReturnBg:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.carriageReturnBg',
            stringRegexp:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.stringRegexp',
            markupList:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupList',
            markupHeading:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupHeading',
            markupItalic:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupItalic',
            markupBold:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupBold',
            markupDeletedText:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupDeletedText',
            markupDeletedBg:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupDeletedBg',
            markupInsertedText:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupInsertedText',
            markupInsertedBg:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupInsertedBg',
            markupChangedText:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupChangedText',
            markupChangedBg:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupChangedBg',
            markupIgnoredText:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupIgnoredText',
            markupIgnoredBg:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.markupIgnoredBg',
            metaDiffRange:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.metaDiffRange',
            brackethighlighterAngle:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.brackethighlighterAngle',
            sublimelinterGutterMark:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.sublimelinterGutterMark',
            constantOtherReferenceLink:
              'colorSchemes.light_high_contrast.colors.prettylights.syntax.constantOtherReferenceLink',
          },
        },
        codemirror: {
          text: 'colorSchemes.light_high_contrast.colors.codemirror.text',
          bg: 'colorSchemes.light_high_contrast.colors.codemirror.bg',
          guttersBg:
            'colorSchemes.light_high_contrast.colors.codemirror.guttersBg',
          guttermarkerText:
            'colorSchemes.light_high_contrast.colors.codemirror.guttermarkerText',
          guttermarkerSubtleText:
            'colorSchemes.light_high_contrast.colors.codemirror.guttermarkerSubtleText',
          linenumberText:
            'colorSchemes.light_high_contrast.colors.codemirror.linenumberText',
          cursor: 'colorSchemes.light_high_contrast.colors.codemirror.cursor',
          selectionBg:
            'colorSchemes.light_high_contrast.colors.codemirror.selectionBg',
          activelineBg:
            'colorSchemes.light_high_contrast.colors.codemirror.activelineBg',
          matchingbracketText:
            'colorSchemes.light_high_contrast.colors.codemirror.matchingbracketText',
          linesBg: 'colorSchemes.light_high_contrast.colors.codemirror.linesBg',
          syntax: {
            comment:
              'colorSchemes.light_high_contrast.colors.codemirror.syntax.comment',
            constant:
              'colorSchemes.light_high_contrast.colors.codemirror.syntax.constant',
            entity:
              'colorSchemes.light_high_contrast.colors.codemirror.syntax.entity',
            keyword:
              'colorSchemes.light_high_contrast.colors.codemirror.syntax.keyword',
            storage:
              'colorSchemes.light_high_contrast.colors.codemirror.syntax.storage',
            string:
              'colorSchemes.light_high_contrast.colors.codemirror.syntax.string',
            support:
              'colorSchemes.light_high_contrast.colors.codemirror.syntax.support',
            variable:
              'colorSchemes.light_high_contrast.colors.codemirror.syntax.variable',
          },
        },
        checks: {
          bg: 'colorSchemes.light_high_contrast.colors.checks.bg',
          textPrimary:
            'colorSchemes.light_high_contrast.colors.checks.textPrimary',
          textSecondary:
            'colorSchemes.light_high_contrast.colors.checks.textSecondary',
          textLink: 'colorSchemes.light_high_contrast.colors.checks.textLink',
          btnIcon: 'colorSchemes.light_high_contrast.colors.checks.btnIcon',
          btnHoverIcon:
            'colorSchemes.light_high_contrast.colors.checks.btnHoverIcon',
          btnHoverBg:
            'colorSchemes.light_high_contrast.colors.checks.btnHoverBg',
          inputText: 'colorSchemes.light_high_contrast.colors.checks.inputText',
          inputPlaceholderText:
            'colorSchemes.light_high_contrast.colors.checks.inputPlaceholderText',
          inputFocusText:
            'colorSchemes.light_high_contrast.colors.checks.inputFocusText',
          inputBg: 'colorSchemes.light_high_contrast.colors.checks.inputBg',
          donutError:
            'colorSchemes.light_high_contrast.colors.checks.donutError',
          donutPending:
            'colorSchemes.light_high_contrast.colors.checks.donutPending',
          donutSuccess:
            'colorSchemes.light_high_contrast.colors.checks.donutSuccess',
          donutNeutral:
            'colorSchemes.light_high_contrast.colors.checks.donutNeutral',
          dropdownText:
            'colorSchemes.light_high_contrast.colors.checks.dropdownText',
          dropdownBg:
            'colorSchemes.light_high_contrast.colors.checks.dropdownBg',
          dropdownBorder:
            'colorSchemes.light_high_contrast.colors.checks.dropdownBorder',
          dropdownShadow:
            'colorSchemes.light_high_contrast.colors.checks.dropdownShadow',
          dropdownHoverText:
            'colorSchemes.light_high_contrast.colors.checks.dropdownHoverText',
          dropdownHoverBg:
            'colorSchemes.light_high_contrast.colors.checks.dropdownHoverBg',
          dropdownBtnHoverText:
            'colorSchemes.light_high_contrast.colors.checks.dropdownBtnHoverText',
          dropdownBtnHoverBg:
            'colorSchemes.light_high_contrast.colors.checks.dropdownBtnHoverBg',
          scrollbarThumbBg:
            'colorSchemes.light_high_contrast.colors.checks.scrollbarThumbBg',
          headerLabelText:
            'colorSchemes.light_high_contrast.colors.checks.headerLabelText',
          headerLabelOpenText:
            'colorSchemes.light_high_contrast.colors.checks.headerLabelOpenText',
          headerBorder:
            'colorSchemes.light_high_contrast.colors.checks.headerBorder',
          headerIcon:
            'colorSchemes.light_high_contrast.colors.checks.headerIcon',
          lineText: 'colorSchemes.light_high_contrast.colors.checks.lineText',
          lineNumText:
            'colorSchemes.light_high_contrast.colors.checks.lineNumText',
          lineTimestampText:
            'colorSchemes.light_high_contrast.colors.checks.lineTimestampText',
          lineHoverBg:
            'colorSchemes.light_high_contrast.colors.checks.lineHoverBg',
          lineSelectedBg:
            'colorSchemes.light_high_contrast.colors.checks.lineSelectedBg',
          lineSelectedNumText:
            'colorSchemes.light_high_contrast.colors.checks.lineSelectedNumText',
          lineDtFmText:
            'colorSchemes.light_high_contrast.colors.checks.lineDtFmText',
          lineDtFmBg:
            'colorSchemes.light_high_contrast.colors.checks.lineDtFmBg',
          gateBg: 'colorSchemes.light_high_contrast.colors.checks.gateBg',
          gateText: 'colorSchemes.light_high_contrast.colors.checks.gateText',
          gateWaitingText:
            'colorSchemes.light_high_contrast.colors.checks.gateWaitingText',
          stepHeaderOpenBg:
            'colorSchemes.light_high_contrast.colors.checks.stepHeaderOpenBg',
          stepErrorText:
            'colorSchemes.light_high_contrast.colors.checks.stepErrorText',
          stepWarningText:
            'colorSchemes.light_high_contrast.colors.checks.stepWarningText',
          loglineText:
            'colorSchemes.light_high_contrast.colors.checks.loglineText',
          loglineNumText:
            'colorSchemes.light_high_contrast.colors.checks.loglineNumText',
          loglineDebugText:
            'colorSchemes.light_high_contrast.colors.checks.loglineDebugText',
          loglineErrorText:
            'colorSchemes.light_high_contrast.colors.checks.loglineErrorText',
          loglineErrorNumText:
            'colorSchemes.light_high_contrast.colors.checks.loglineErrorNumText',
          loglineErrorBg:
            'colorSchemes.light_high_contrast.colors.checks.loglineErrorBg',
          loglineWarningText:
            'colorSchemes.light_high_contrast.colors.checks.loglineWarningText',
          loglineWarningNumText:
            'colorSchemes.light_high_contrast.colors.checks.loglineWarningNumText',
          loglineWarningBg:
            'colorSchemes.light_high_contrast.colors.checks.loglineWarningBg',
          loglineCommandText:
            'colorSchemes.light_high_contrast.colors.checks.loglineCommandText',
          loglineSectionText:
            'colorSchemes.light_high_contrast.colors.checks.loglineSectionText',
          ansi: {
            black: 'colorSchemes.light_high_contrast.colors.checks.ansi.black',
            blackBright:
              'colorSchemes.light_high_contrast.colors.checks.ansi.blackBright',
            white: 'colorSchemes.light_high_contrast.colors.checks.ansi.white',
            whiteBright:
              'colorSchemes.light_high_contrast.colors.checks.ansi.whiteBright',
            gray: 'colorSchemes.light_high_contrast.colors.checks.ansi.gray',
            red: 'colorSchemes.light_high_contrast.colors.checks.ansi.red',
            redBright:
              'colorSchemes.light_high_contrast.colors.checks.ansi.redBright',
            green: 'colorSchemes.light_high_contrast.colors.checks.ansi.green',
            greenBright:
              'colorSchemes.light_high_contrast.colors.checks.ansi.greenBright',
            yellow:
              'colorSchemes.light_high_contrast.colors.checks.ansi.yellow',
            yellowBright:
              'colorSchemes.light_high_contrast.colors.checks.ansi.yellowBright',
            blue: 'colorSchemes.light_high_contrast.colors.checks.ansi.blue',
            blueBright:
              'colorSchemes.light_high_contrast.colors.checks.ansi.blueBright',
            magenta:
              'colorSchemes.light_high_contrast.colors.checks.ansi.magenta',
            magentaBright:
              'colorSchemes.light_high_contrast.colors.checks.ansi.magentaBright',
            cyan: 'colorSchemes.light_high_contrast.colors.checks.ansi.cyan',
            cyanBright:
              'colorSchemes.light_high_contrast.colors.checks.ansi.cyanBright',
          },
        },
        project: {
          headerBg: 'colorSchemes.light_high_contrast.colors.project.headerBg',
          sidebarBg:
            'colorSchemes.light_high_contrast.colors.project.sidebarBg',
          gradientIn:
            'colorSchemes.light_high_contrast.colors.project.gradientIn',
          gradientOut:
            'colorSchemes.light_high_contrast.colors.project.gradientOut',
        },
        mktg: {
          btn: {
            bg: 'colorSchemes.light_high_contrast.colors.mktg.btn.bg',
          },
        },
        control: {
          borderColor: {
            emphasis:
              'colorSchemes.light_high_contrast.colors.control.borderColor.emphasis',
          },
        },
        avatar: {
          bg: 'colorSchemes.light_high_contrast.colors.avatar.bg',
          border: 'colorSchemes.light_high_contrast.colors.avatar.border',
          stackFade: 'colorSchemes.light_high_contrast.colors.avatar.stackFade',
          stackFadeMore:
            'colorSchemes.light_high_contrast.colors.avatar.stackFadeMore',
        },
        topicTag: {
          border: 'colorSchemes.light_high_contrast.colors.topicTag.border',
        },
        counter: {
          border: 'colorSchemes.light_high_contrast.colors.counter.border',
        },
        selectMenu: {
          backdropBorder:
            'colorSchemes.light_high_contrast.colors.selectMenu.backdropBorder',
          tapHighlight:
            'colorSchemes.light_high_contrast.colors.selectMenu.tapHighlight',
          tapFocusBg:
            'colorSchemes.light_high_contrast.colors.selectMenu.tapFocusBg',
        },
        header: {
          text: 'colorSchemes.light_high_contrast.colors.header.text',
          bg: 'colorSchemes.light_high_contrast.colors.header.bg',
          divider: 'colorSchemes.light_high_contrast.colors.header.divider',
          logo: 'colorSchemes.light_high_contrast.colors.header.logo',
        },
        headerSearch: {
          bg: 'colorSchemes.light_high_contrast.colors.headerSearch.bg',
          border: 'colorSchemes.light_high_contrast.colors.headerSearch.border',
        },
        sidenav: {
          selectedBg:
            'colorSchemes.light_high_contrast.colors.sidenav.selectedBg',
        },
        menu: {
          bgActive: 'colorSchemes.light_high_contrast.colors.menu.bgActive',
        },
        input: {
          disabledBg:
            'colorSchemes.light_high_contrast.colors.input.disabledBg',
        },
        timeline: {
          badgeBg: 'colorSchemes.light_high_contrast.colors.timeline.badgeBg',
        },
        ansi: {
          black: 'colorSchemes.light_high_contrast.colors.ansi.black',
          blackBright:
            'colorSchemes.light_high_contrast.colors.ansi.blackBright',
          white: 'colorSchemes.light_high_contrast.colors.ansi.white',
          whiteBright:
            'colorSchemes.light_high_contrast.colors.ansi.whiteBright',
          gray: 'colorSchemes.light_high_contrast.colors.ansi.gray',
          red: 'colorSchemes.light_high_contrast.colors.ansi.red',
          redBright: 'colorSchemes.light_high_contrast.colors.ansi.redBright',
          green: 'colorSchemes.light_high_contrast.colors.ansi.green',
          greenBright:
            'colorSchemes.light_high_contrast.colors.ansi.greenBright',
          yellow: 'colorSchemes.light_high_contrast.colors.ansi.yellow',
          yellowBright:
            'colorSchemes.light_high_contrast.colors.ansi.yellowBright',
          blue: 'colorSchemes.light_high_contrast.colors.ansi.blue',
          blueBright: 'colorSchemes.light_high_contrast.colors.ansi.blueBright',
          magenta: 'colorSchemes.light_high_contrast.colors.ansi.magenta',
          magentaBright:
            'colorSchemes.light_high_contrast.colors.ansi.magentaBright',
          cyan: 'colorSchemes.light_high_contrast.colors.ansi.cyan',
          cyanBright: 'colorSchemes.light_high_contrast.colors.ansi.cyanBright',
        },
        btn: {
          text: 'colorSchemes.light_high_contrast.colors.btn.text',
          bg: 'colorSchemes.light_high_contrast.colors.btn.bg',
          border: 'colorSchemes.light_high_contrast.colors.btn.border',
          hoverBg: 'colorSchemes.light_high_contrast.colors.btn.hoverBg',
          hoverBorder:
            'colorSchemes.light_high_contrast.colors.btn.hoverBorder',
          activeBg: 'colorSchemes.light_high_contrast.colors.btn.activeBg',
          activeBorder:
            'colorSchemes.light_high_contrast.colors.btn.activeBorder',
          selectedBg: 'colorSchemes.light_high_contrast.colors.btn.selectedBg',
          counterBg: 'colorSchemes.light_high_contrast.colors.btn.counterBg',
          primary: {
            text: 'colorSchemes.light_high_contrast.colors.btn.primary.text',
            bg: 'colorSchemes.light_high_contrast.colors.btn.primary.bg',
            border:
              'colorSchemes.light_high_contrast.colors.btn.primary.border',
            hoverBg:
              'colorSchemes.light_high_contrast.colors.btn.primary.hoverBg',
            hoverBorder:
              'colorSchemes.light_high_contrast.colors.btn.primary.hoverBorder',
            selectedBg:
              'colorSchemes.light_high_contrast.colors.btn.primary.selectedBg',
            disabledText:
              'colorSchemes.light_high_contrast.colors.btn.primary.disabledText',
            disabledBg:
              'colorSchemes.light_high_contrast.colors.btn.primary.disabledBg',
            disabledBorder:
              'colorSchemes.light_high_contrast.colors.btn.primary.disabledBorder',
            icon: 'colorSchemes.light_high_contrast.colors.btn.primary.icon',
            counterBg:
              'colorSchemes.light_high_contrast.colors.btn.primary.counterBg',
          },
          outline: {
            text: 'colorSchemes.light_high_contrast.colors.btn.outline.text',
            hoverText:
              'colorSchemes.light_high_contrast.colors.btn.outline.hoverText',
            hoverBg:
              'colorSchemes.light_high_contrast.colors.btn.outline.hoverBg',
            hoverBorder:
              'colorSchemes.light_high_contrast.colors.btn.outline.hoverBorder',
            hoverCounterBg:
              'colorSchemes.light_high_contrast.colors.btn.outline.hoverCounterBg',
            selectedText:
              'colorSchemes.light_high_contrast.colors.btn.outline.selectedText',
            selectedBg:
              'colorSchemes.light_high_contrast.colors.btn.outline.selectedBg',
            selectedBorder:
              'colorSchemes.light_high_contrast.colors.btn.outline.selectedBorder',
            disabledText:
              'colorSchemes.light_high_contrast.colors.btn.outline.disabledText',
            disabledBg:
              'colorSchemes.light_high_contrast.colors.btn.outline.disabledBg',
            disabledCounterBg:
              'colorSchemes.light_high_contrast.colors.btn.outline.disabledCounterBg',
            counterBg:
              'colorSchemes.light_high_contrast.colors.btn.outline.counterBg',
          },
          danger: {
            text: 'colorSchemes.light_high_contrast.colors.btn.danger.text',
            hoverText:
              'colorSchemes.light_high_contrast.colors.btn.danger.hoverText',
            hoverBg:
              'colorSchemes.light_high_contrast.colors.btn.danger.hoverBg',
            hoverBorder:
              'colorSchemes.light_high_contrast.colors.btn.danger.hoverBorder',
            hoverCounterBg:
              'colorSchemes.light_high_contrast.colors.btn.danger.hoverCounterBg',
            selectedText:
              'colorSchemes.light_high_contrast.colors.btn.danger.selectedText',
            selectedBg:
              'colorSchemes.light_high_contrast.colors.btn.danger.selectedBg',
            selectedBorder:
              'colorSchemes.light_high_contrast.colors.btn.danger.selectedBorder',
            disabledText:
              'colorSchemes.light_high_contrast.colors.btn.danger.disabledText',
            disabledBg:
              'colorSchemes.light_high_contrast.colors.btn.danger.disabledBg',
            disabledCounterBg:
              'colorSchemes.light_high_contrast.colors.btn.danger.disabledCounterBg',
            counterBg:
              'colorSchemes.light_high_contrast.colors.btn.danger.counterBg',
            icon: 'colorSchemes.light_high_contrast.colors.btn.danger.icon',
            hoverIcon:
              'colorSchemes.light_high_contrast.colors.btn.danger.hoverIcon',
          },
        },
        underlinenav: {
          icon: 'colorSchemes.light_high_contrast.colors.underlinenav.icon',
          borderHover:
            'colorSchemes.light_high_contrast.colors.underlinenav.borderHover',
        },
        actionListItem: {
          inlineDivider:
            'colorSchemes.light_high_contrast.colors.actionListItem.inlineDivider',
          default: {
            hoverBg:
              'colorSchemes.light_high_contrast.colors.actionListItem.default.hoverBg',
            hoverBorder:
              'colorSchemes.light_high_contrast.colors.actionListItem.default.hoverBorder',
            activeBg:
              'colorSchemes.light_high_contrast.colors.actionListItem.default.activeBg',
            activeBorder:
              'colorSchemes.light_high_contrast.colors.actionListItem.default.activeBorder',
            selectedBg:
              'colorSchemes.light_high_contrast.colors.actionListItem.default.selectedBg',
          },
          danger: {
            hoverBg:
              'colorSchemes.light_high_contrast.colors.actionListItem.danger.hoverBg',
            activeBg:
              'colorSchemes.light_high_contrast.colors.actionListItem.danger.activeBg',
            hoverText:
              'colorSchemes.light_high_contrast.colors.actionListItem.danger.hoverText',
          },
        },
        switchTrack: {
          bg: 'colorSchemes.light_high_contrast.colors.switchTrack.bg',
          hoverBg:
            'colorSchemes.light_high_contrast.colors.switchTrack.hoverBg',
          activeBg:
            'colorSchemes.light_high_contrast.colors.switchTrack.activeBg',
          disabledBg:
            'colorSchemes.light_high_contrast.colors.switchTrack.disabledBg',
          fg: 'colorSchemes.light_high_contrast.colors.switchTrack.fg',
          disabledFg:
            'colorSchemes.light_high_contrast.colors.switchTrack.disabledFg',
          border: 'colorSchemes.light_high_contrast.colors.switchTrack.border',
          checked: {
            bg: 'colorSchemes.light_high_contrast.colors.switchTrack.checked.bg',
            hoverBg:
              'colorSchemes.light_high_contrast.colors.switchTrack.checked.hoverBg',
            activeBg:
              'colorSchemes.light_high_contrast.colors.switchTrack.checked.activeBg',
            fg: 'colorSchemes.light_high_contrast.colors.switchTrack.checked.fg',
            disabledFg:
              'colorSchemes.light_high_contrast.colors.switchTrack.checked.disabledFg',
            border:
              'colorSchemes.light_high_contrast.colors.switchTrack.checked.border',
          },
        },
        switchKnob: {
          bg: 'colorSchemes.light_high_contrast.colors.switchKnob.bg',
          disabledBg:
            'colorSchemes.light_high_contrast.colors.switchKnob.disabledBg',
          border: 'colorSchemes.light_high_contrast.colors.switchKnob.border',
          checked: {
            bg: 'colorSchemes.light_high_contrast.colors.switchKnob.checked.bg',
            disabledBg:
              'colorSchemes.light_high_contrast.colors.switchKnob.checked.disabledBg',
            border:
              'colorSchemes.light_high_contrast.colors.switchKnob.checked.border',
          },
        },
        segmentedControl: {
          bg: 'colorSchemes.light_high_contrast.colors.segmentedControl.bg',
          button: {
            bg: 'colorSchemes.light_high_contrast.colors.segmentedControl.button.bg',
            hover: {
              bg: 'colorSchemes.light_high_contrast.colors.segmentedControl.button.hover.bg',
            },
            active: {
              bg: 'colorSchemes.light_high_contrast.colors.segmentedControl.button.active.bg',
            },
            selected: {
              border:
                'colorSchemes.light_high_contrast.colors.segmentedControl.button.selected.border',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg:
              'colorSchemes.light_high_contrast.colors.treeViewItem.chevron.hoverBg',
          },
          directory: {
            fill: 'colorSchemes.light_high_contrast.colors.treeViewItem.directory.fill',
          },
        },
        fg: {
          default: 'colorSchemes.light_high_contrast.colors.fg.default',
          muted: 'colorSchemes.light_high_contrast.colors.fg.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.fg.subtle',
          onEmphasis: 'colorSchemes.light_high_contrast.colors.fg.onEmphasis',
        },
        canvas: {
          default: 'colorSchemes.light_high_contrast.colors.canvas.default',
          overlay: 'colorSchemes.light_high_contrast.colors.canvas.overlay',
          inset: 'colorSchemes.light_high_contrast.colors.canvas.inset',
          subtle: 'colorSchemes.light_high_contrast.colors.canvas.subtle',
        },
        border: {
          default: 'colorSchemes.light_high_contrast.colors.border.default',
          muted: 'colorSchemes.light_high_contrast.colors.border.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.border.subtle',
        },
        neutral: {
          emphasisPlus:
            'colorSchemes.light_high_contrast.colors.neutral.emphasisPlus',
          emphasis: 'colorSchemes.light_high_contrast.colors.neutral.emphasis',
          muted: 'colorSchemes.light_high_contrast.colors.neutral.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.neutral.subtle',
        },
        accent: {
          fg: 'colorSchemes.light_high_contrast.colors.accent.fg',
          emphasis: 'colorSchemes.light_high_contrast.colors.accent.emphasis',
          muted: 'colorSchemes.light_high_contrast.colors.accent.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.accent.subtle',
        },
        success: {
          fg: 'colorSchemes.light_high_contrast.colors.success.fg',
          emphasis: 'colorSchemes.light_high_contrast.colors.success.emphasis',
          muted: 'colorSchemes.light_high_contrast.colors.success.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.success.subtle',
        },
        attention: {
          fg: 'colorSchemes.light_high_contrast.colors.attention.fg',
          emphasis:
            'colorSchemes.light_high_contrast.colors.attention.emphasis',
          muted: 'colorSchemes.light_high_contrast.colors.attention.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.attention.subtle',
        },
        severe: {
          fg: 'colorSchemes.light_high_contrast.colors.severe.fg',
          emphasis: 'colorSchemes.light_high_contrast.colors.severe.emphasis',
          muted: 'colorSchemes.light_high_contrast.colors.severe.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.severe.subtle',
        },
        danger: {
          fg: 'colorSchemes.light_high_contrast.colors.danger.fg',
          emphasis: 'colorSchemes.light_high_contrast.colors.danger.emphasis',
          muted: 'colorSchemes.light_high_contrast.colors.danger.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.danger.subtle',
        },
        open: {
          fg: 'colorSchemes.light_high_contrast.colors.open.fg',
          emphasis: 'colorSchemes.light_high_contrast.colors.open.emphasis',
          muted: 'colorSchemes.light_high_contrast.colors.open.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.open.subtle',
        },
        closed: {
          fg: 'colorSchemes.light_high_contrast.colors.closed.fg',
          emphasis: 'colorSchemes.light_high_contrast.colors.closed.emphasis',
          muted: 'colorSchemes.light_high_contrast.colors.closed.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.closed.subtle',
        },
        done: {
          fg: 'colorSchemes.light_high_contrast.colors.done.fg',
          emphasis: 'colorSchemes.light_high_contrast.colors.done.emphasis',
          muted: 'colorSchemes.light_high_contrast.colors.done.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.done.subtle',
        },
        sponsors: {
          fg: 'colorSchemes.light_high_contrast.colors.sponsors.fg',
          emphasis: 'colorSchemes.light_high_contrast.colors.sponsors.emphasis',
          muted: 'colorSchemes.light_high_contrast.colors.sponsors.muted',
          subtle: 'colorSchemes.light_high_contrast.colors.sponsors.subtle',
        },
        primer: {
          fg: {
            disabled:
              'colorSchemes.light_high_contrast.colors.primer.fg.disabled',
          },
          canvas: {
            backdrop:
              'colorSchemes.light_high_contrast.colors.primer.canvas.backdrop',
            sticky:
              'colorSchemes.light_high_contrast.colors.primer.canvas.sticky',
          },
          border: {
            active:
              'colorSchemes.light_high_contrast.colors.primer.border.active',
            contrast:
              'colorSchemes.light_high_contrast.colors.primer.border.contrast',
          },
        },
      },
      shadows: {
        mktg: {
          btn: {
            shadow: {
              outline:
                'colorSchemes.light_high_contrast.shadows.mktg.btn.shadow.outline',
              focus:
                'colorSchemes.light_high_contrast.shadows.mktg.btn.shadow.focus',
              hover:
                'colorSchemes.light_high_contrast.shadows.mktg.btn.shadow.hover',
              hoverMuted:
                'colorSchemes.light_high_contrast.shadows.mktg.btn.shadow.hoverMuted',
            },
          },
        },
        avatar: {
          childShadow:
            'colorSchemes.light_high_contrast.shadows.avatar.childShadow',
        },
        overlay: {
          shadow: 'colorSchemes.light_high_contrast.shadows.overlay.shadow',
        },
        btn: {
          shadow: 'colorSchemes.light_high_contrast.shadows.btn.shadow',
          insetShadow:
            'colorSchemes.light_high_contrast.shadows.btn.insetShadow',
          primary: {
            shadow:
              'colorSchemes.light_high_contrast.shadows.btn.primary.shadow',
            insetShadow:
              'colorSchemes.light_high_contrast.shadows.btn.primary.insetShadow',
            selectedShadow:
              'colorSchemes.light_high_contrast.shadows.btn.primary.selectedShadow',
          },
          outline: {
            hoverShadow:
              'colorSchemes.light_high_contrast.shadows.btn.outline.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.light_high_contrast.shadows.btn.outline.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.light_high_contrast.shadows.btn.outline.selectedShadow',
          },
          danger: {
            hoverShadow:
              'colorSchemes.light_high_contrast.shadows.btn.danger.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.light_high_contrast.shadows.btn.danger.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.light_high_contrast.shadows.btn.danger.selectedShadow',
          },
        },
        shadow: {
          small: 'colorSchemes.light_high_contrast.shadows.shadow.small',
          medium: 'colorSchemes.light_high_contrast.shadows.shadow.medium',
          large: 'colorSchemes.light_high_contrast.shadows.shadow.large',
          extraLarge:
            'colorSchemes.light_high_contrast.shadows.shadow.extraLarge',
        },
        primer: {
          shadow: {
            highlight:
              'colorSchemes.light_high_contrast.shadows.primer.shadow.highlight',
            inset:
              'colorSchemes.light_high_contrast.shadows.primer.shadow.inset',
          },
        },
      },
    },
    light_colorblind: {
      colors: {
        canvasDefaultTransparent:
          'colorSchemes.light_colorblind.colors.canvasDefaultTransparent',
        pageHeaderBg: 'colorSchemes.light_colorblind.colors.pageHeaderBg',
        marketingIcon: {
          primary: 'colorSchemes.light_colorblind.colors.marketingIcon.primary',
          secondary:
            'colorSchemes.light_colorblind.colors.marketingIcon.secondary',
        },
        diffBlob: {
          addition: {
            numText:
              'colorSchemes.light_colorblind.colors.diffBlob.addition.numText',
            fg: 'colorSchemes.light_colorblind.colors.diffBlob.addition.fg',
            numBg:
              'colorSchemes.light_colorblind.colors.diffBlob.addition.numBg',
            lineBg:
              'colorSchemes.light_colorblind.colors.diffBlob.addition.lineBg',
            wordBg:
              'colorSchemes.light_colorblind.colors.diffBlob.addition.wordBg',
          },
          deletion: {
            numText:
              'colorSchemes.light_colorblind.colors.diffBlob.deletion.numText',
            fg: 'colorSchemes.light_colorblind.colors.diffBlob.deletion.fg',
            numBg:
              'colorSchemes.light_colorblind.colors.diffBlob.deletion.numBg',
            lineBg:
              'colorSchemes.light_colorblind.colors.diffBlob.deletion.lineBg',
            wordBg:
              'colorSchemes.light_colorblind.colors.diffBlob.deletion.wordBg',
          },
          hunk: {
            numBg: 'colorSchemes.light_colorblind.colors.diffBlob.hunk.numBg',
          },
          expander: {
            icon: 'colorSchemes.light_colorblind.colors.diffBlob.expander.icon',
          },
        },
        diffstat: {
          deletionBorder:
            'colorSchemes.light_colorblind.colors.diffstat.deletionBorder',
          additionBorder:
            'colorSchemes.light_colorblind.colors.diffstat.additionBorder',
          additionBg:
            'colorSchemes.light_colorblind.colors.diffstat.additionBg',
        },
        searchKeyword: {
          hl: 'colorSchemes.light_colorblind.colors.searchKeyword.hl',
        },
        prettylights: {
          syntax: {
            comment:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.comment',
            constant:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.constant',
            entity:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.entity',
            storageModifierImport:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.storageModifierImport',
            entityTag:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.entityTag',
            keyword:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.keyword',
            string:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.string',
            variable:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.variable',
            brackethighlighterUnmatched:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.brackethighlighterUnmatched',
            invalidIllegalText:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.invalidIllegalText',
            invalidIllegalBg:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.invalidIllegalBg',
            carriageReturnText:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.carriageReturnText',
            carriageReturnBg:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.carriageReturnBg',
            stringRegexp:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.stringRegexp',
            markupList:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupList',
            markupHeading:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupHeading',
            markupItalic:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupItalic',
            markupBold:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupBold',
            markupDeletedText:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupDeletedText',
            markupDeletedBg:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupDeletedBg',
            markupInsertedText:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupInsertedText',
            markupInsertedBg:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupInsertedBg',
            markupChangedText:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupChangedText',
            markupChangedBg:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupChangedBg',
            markupIgnoredText:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupIgnoredText',
            markupIgnoredBg:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.markupIgnoredBg',
            metaDiffRange:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.metaDiffRange',
            brackethighlighterAngle:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.brackethighlighterAngle',
            sublimelinterGutterMark:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.sublimelinterGutterMark',
            constantOtherReferenceLink:
              'colorSchemes.light_colorblind.colors.prettylights.syntax.constantOtherReferenceLink',
          },
        },
        codemirror: {
          text: 'colorSchemes.light_colorblind.colors.codemirror.text',
          bg: 'colorSchemes.light_colorblind.colors.codemirror.bg',
          guttersBg:
            'colorSchemes.light_colorblind.colors.codemirror.guttersBg',
          guttermarkerText:
            'colorSchemes.light_colorblind.colors.codemirror.guttermarkerText',
          guttermarkerSubtleText:
            'colorSchemes.light_colorblind.colors.codemirror.guttermarkerSubtleText',
          linenumberText:
            'colorSchemes.light_colorblind.colors.codemirror.linenumberText',
          cursor: 'colorSchemes.light_colorblind.colors.codemirror.cursor',
          selectionBg:
            'colorSchemes.light_colorblind.colors.codemirror.selectionBg',
          activelineBg:
            'colorSchemes.light_colorblind.colors.codemirror.activelineBg',
          matchingbracketText:
            'colorSchemes.light_colorblind.colors.codemirror.matchingbracketText',
          linesBg: 'colorSchemes.light_colorblind.colors.codemirror.linesBg',
          syntax: {
            comment:
              'colorSchemes.light_colorblind.colors.codemirror.syntax.comment',
            constant:
              'colorSchemes.light_colorblind.colors.codemirror.syntax.constant',
            entity:
              'colorSchemes.light_colorblind.colors.codemirror.syntax.entity',
            keyword:
              'colorSchemes.light_colorblind.colors.codemirror.syntax.keyword',
            storage:
              'colorSchemes.light_colorblind.colors.codemirror.syntax.storage',
            string:
              'colorSchemes.light_colorblind.colors.codemirror.syntax.string',
            support:
              'colorSchemes.light_colorblind.colors.codemirror.syntax.support',
            variable:
              'colorSchemes.light_colorblind.colors.codemirror.syntax.variable',
          },
        },
        checks: {
          bg: 'colorSchemes.light_colorblind.colors.checks.bg',
          textPrimary:
            'colorSchemes.light_colorblind.colors.checks.textPrimary',
          textSecondary:
            'colorSchemes.light_colorblind.colors.checks.textSecondary',
          textLink: 'colorSchemes.light_colorblind.colors.checks.textLink',
          btnIcon: 'colorSchemes.light_colorblind.colors.checks.btnIcon',
          btnHoverIcon:
            'colorSchemes.light_colorblind.colors.checks.btnHoverIcon',
          btnHoverBg: 'colorSchemes.light_colorblind.colors.checks.btnHoverBg',
          inputText: 'colorSchemes.light_colorblind.colors.checks.inputText',
          inputPlaceholderText:
            'colorSchemes.light_colorblind.colors.checks.inputPlaceholderText',
          inputFocusText:
            'colorSchemes.light_colorblind.colors.checks.inputFocusText',
          inputBg: 'colorSchemes.light_colorblind.colors.checks.inputBg',
          donutError: 'colorSchemes.light_colorblind.colors.checks.donutError',
          donutPending:
            'colorSchemes.light_colorblind.colors.checks.donutPending',
          donutSuccess:
            'colorSchemes.light_colorblind.colors.checks.donutSuccess',
          donutNeutral:
            'colorSchemes.light_colorblind.colors.checks.donutNeutral',
          dropdownText:
            'colorSchemes.light_colorblind.colors.checks.dropdownText',
          dropdownBg: 'colorSchemes.light_colorblind.colors.checks.dropdownBg',
          dropdownBorder:
            'colorSchemes.light_colorblind.colors.checks.dropdownBorder',
          dropdownShadow:
            'colorSchemes.light_colorblind.colors.checks.dropdownShadow',
          dropdownHoverText:
            'colorSchemes.light_colorblind.colors.checks.dropdownHoverText',
          dropdownHoverBg:
            'colorSchemes.light_colorblind.colors.checks.dropdownHoverBg',
          dropdownBtnHoverText:
            'colorSchemes.light_colorblind.colors.checks.dropdownBtnHoverText',
          dropdownBtnHoverBg:
            'colorSchemes.light_colorblind.colors.checks.dropdownBtnHoverBg',
          scrollbarThumbBg:
            'colorSchemes.light_colorblind.colors.checks.scrollbarThumbBg',
          headerLabelText:
            'colorSchemes.light_colorblind.colors.checks.headerLabelText',
          headerLabelOpenText:
            'colorSchemes.light_colorblind.colors.checks.headerLabelOpenText',
          headerBorder:
            'colorSchemes.light_colorblind.colors.checks.headerBorder',
          headerIcon: 'colorSchemes.light_colorblind.colors.checks.headerIcon',
          lineText: 'colorSchemes.light_colorblind.colors.checks.lineText',
          lineNumText:
            'colorSchemes.light_colorblind.colors.checks.lineNumText',
          lineTimestampText:
            'colorSchemes.light_colorblind.colors.checks.lineTimestampText',
          lineHoverBg:
            'colorSchemes.light_colorblind.colors.checks.lineHoverBg',
          lineSelectedBg:
            'colorSchemes.light_colorblind.colors.checks.lineSelectedBg',
          lineSelectedNumText:
            'colorSchemes.light_colorblind.colors.checks.lineSelectedNumText',
          lineDtFmText:
            'colorSchemes.light_colorblind.colors.checks.lineDtFmText',
          lineDtFmBg: 'colorSchemes.light_colorblind.colors.checks.lineDtFmBg',
          gateBg: 'colorSchemes.light_colorblind.colors.checks.gateBg',
          gateText: 'colorSchemes.light_colorblind.colors.checks.gateText',
          gateWaitingText:
            'colorSchemes.light_colorblind.colors.checks.gateWaitingText',
          stepHeaderOpenBg:
            'colorSchemes.light_colorblind.colors.checks.stepHeaderOpenBg',
          stepErrorText:
            'colorSchemes.light_colorblind.colors.checks.stepErrorText',
          stepWarningText:
            'colorSchemes.light_colorblind.colors.checks.stepWarningText',
          loglineText:
            'colorSchemes.light_colorblind.colors.checks.loglineText',
          loglineNumText:
            'colorSchemes.light_colorblind.colors.checks.loglineNumText',
          loglineDebugText:
            'colorSchemes.light_colorblind.colors.checks.loglineDebugText',
          loglineErrorText:
            'colorSchemes.light_colorblind.colors.checks.loglineErrorText',
          loglineErrorNumText:
            'colorSchemes.light_colorblind.colors.checks.loglineErrorNumText',
          loglineErrorBg:
            'colorSchemes.light_colorblind.colors.checks.loglineErrorBg',
          loglineWarningText:
            'colorSchemes.light_colorblind.colors.checks.loglineWarningText',
          loglineWarningNumText:
            'colorSchemes.light_colorblind.colors.checks.loglineWarningNumText',
          loglineWarningBg:
            'colorSchemes.light_colorblind.colors.checks.loglineWarningBg',
          loglineCommandText:
            'colorSchemes.light_colorblind.colors.checks.loglineCommandText',
          loglineSectionText:
            'colorSchemes.light_colorblind.colors.checks.loglineSectionText',
          ansi: {
            black: 'colorSchemes.light_colorblind.colors.checks.ansi.black',
            blackBright:
              'colorSchemes.light_colorblind.colors.checks.ansi.blackBright',
            white: 'colorSchemes.light_colorblind.colors.checks.ansi.white',
            whiteBright:
              'colorSchemes.light_colorblind.colors.checks.ansi.whiteBright',
            gray: 'colorSchemes.light_colorblind.colors.checks.ansi.gray',
            red: 'colorSchemes.light_colorblind.colors.checks.ansi.red',
            redBright:
              'colorSchemes.light_colorblind.colors.checks.ansi.redBright',
            green: 'colorSchemes.light_colorblind.colors.checks.ansi.green',
            greenBright:
              'colorSchemes.light_colorblind.colors.checks.ansi.greenBright',
            yellow: 'colorSchemes.light_colorblind.colors.checks.ansi.yellow',
            yellowBright:
              'colorSchemes.light_colorblind.colors.checks.ansi.yellowBright',
            blue: 'colorSchemes.light_colorblind.colors.checks.ansi.blue',
            blueBright:
              'colorSchemes.light_colorblind.colors.checks.ansi.blueBright',
            magenta: 'colorSchemes.light_colorblind.colors.checks.ansi.magenta',
            magentaBright:
              'colorSchemes.light_colorblind.colors.checks.ansi.magentaBright',
            cyan: 'colorSchemes.light_colorblind.colors.checks.ansi.cyan',
            cyanBright:
              'colorSchemes.light_colorblind.colors.checks.ansi.cyanBright',
          },
        },
        project: {
          headerBg: 'colorSchemes.light_colorblind.colors.project.headerBg',
          sidebarBg: 'colorSchemes.light_colorblind.colors.project.sidebarBg',
          gradientIn: 'colorSchemes.light_colorblind.colors.project.gradientIn',
          gradientOut:
            'colorSchemes.light_colorblind.colors.project.gradientOut',
        },
        mktg: {
          btn: {
            bg: 'colorSchemes.light_colorblind.colors.mktg.btn.bg',
          },
        },
        control: {
          borderColor: {
            emphasis:
              'colorSchemes.light_colorblind.colors.control.borderColor.emphasis',
          },
        },
        avatar: {
          bg: 'colorSchemes.light_colorblind.colors.avatar.bg',
          border: 'colorSchemes.light_colorblind.colors.avatar.border',
          stackFade: 'colorSchemes.light_colorblind.colors.avatar.stackFade',
          stackFadeMore:
            'colorSchemes.light_colorblind.colors.avatar.stackFadeMore',
        },
        topicTag: {
          border: 'colorSchemes.light_colorblind.colors.topicTag.border',
        },
        counter: {
          border: 'colorSchemes.light_colorblind.colors.counter.border',
        },
        selectMenu: {
          backdropBorder:
            'colorSchemes.light_colorblind.colors.selectMenu.backdropBorder',
          tapHighlight:
            'colorSchemes.light_colorblind.colors.selectMenu.tapHighlight',
          tapFocusBg:
            'colorSchemes.light_colorblind.colors.selectMenu.tapFocusBg',
        },
        header: {
          text: 'colorSchemes.light_colorblind.colors.header.text',
          bg: 'colorSchemes.light_colorblind.colors.header.bg',
          divider: 'colorSchemes.light_colorblind.colors.header.divider',
          logo: 'colorSchemes.light_colorblind.colors.header.logo',
        },
        headerSearch: {
          bg: 'colorSchemes.light_colorblind.colors.headerSearch.bg',
          border: 'colorSchemes.light_colorblind.colors.headerSearch.border',
        },
        sidenav: {
          selectedBg: 'colorSchemes.light_colorblind.colors.sidenav.selectedBg',
        },
        menu: {
          bgActive: 'colorSchemes.light_colorblind.colors.menu.bgActive',
        },
        input: {
          disabledBg: 'colorSchemes.light_colorblind.colors.input.disabledBg',
        },
        timeline: {
          badgeBg: 'colorSchemes.light_colorblind.colors.timeline.badgeBg',
        },
        ansi: {
          black: 'colorSchemes.light_colorblind.colors.ansi.black',
          blackBright: 'colorSchemes.light_colorblind.colors.ansi.blackBright',
          white: 'colorSchemes.light_colorblind.colors.ansi.white',
          whiteBright: 'colorSchemes.light_colorblind.colors.ansi.whiteBright',
          gray: 'colorSchemes.light_colorblind.colors.ansi.gray',
          red: 'colorSchemes.light_colorblind.colors.ansi.red',
          redBright: 'colorSchemes.light_colorblind.colors.ansi.redBright',
          green: 'colorSchemes.light_colorblind.colors.ansi.green',
          greenBright: 'colorSchemes.light_colorblind.colors.ansi.greenBright',
          yellow: 'colorSchemes.light_colorblind.colors.ansi.yellow',
          yellowBright:
            'colorSchemes.light_colorblind.colors.ansi.yellowBright',
          blue: 'colorSchemes.light_colorblind.colors.ansi.blue',
          blueBright: 'colorSchemes.light_colorblind.colors.ansi.blueBright',
          magenta: 'colorSchemes.light_colorblind.colors.ansi.magenta',
          magentaBright:
            'colorSchemes.light_colorblind.colors.ansi.magentaBright',
          cyan: 'colorSchemes.light_colorblind.colors.ansi.cyan',
          cyanBright: 'colorSchemes.light_colorblind.colors.ansi.cyanBright',
        },
        btn: {
          text: 'colorSchemes.light_colorblind.colors.btn.text',
          bg: 'colorSchemes.light_colorblind.colors.btn.bg',
          border: 'colorSchemes.light_colorblind.colors.btn.border',
          hoverBg: 'colorSchemes.light_colorblind.colors.btn.hoverBg',
          hoverBorder: 'colorSchemes.light_colorblind.colors.btn.hoverBorder',
          activeBg: 'colorSchemes.light_colorblind.colors.btn.activeBg',
          activeBorder: 'colorSchemes.light_colorblind.colors.btn.activeBorder',
          selectedBg: 'colorSchemes.light_colorblind.colors.btn.selectedBg',
          counterBg: 'colorSchemes.light_colorblind.colors.btn.counterBg',
          primary: {
            text: 'colorSchemes.light_colorblind.colors.btn.primary.text',
            bg: 'colorSchemes.light_colorblind.colors.btn.primary.bg',
            border: 'colorSchemes.light_colorblind.colors.btn.primary.border',
            hoverBg: 'colorSchemes.light_colorblind.colors.btn.primary.hoverBg',
            hoverBorder:
              'colorSchemes.light_colorblind.colors.btn.primary.hoverBorder',
            selectedBg:
              'colorSchemes.light_colorblind.colors.btn.primary.selectedBg',
            disabledText:
              'colorSchemes.light_colorblind.colors.btn.primary.disabledText',
            disabledBg:
              'colorSchemes.light_colorblind.colors.btn.primary.disabledBg',
            disabledBorder:
              'colorSchemes.light_colorblind.colors.btn.primary.disabledBorder',
            icon: 'colorSchemes.light_colorblind.colors.btn.primary.icon',
            counterBg:
              'colorSchemes.light_colorblind.colors.btn.primary.counterBg',
          },
          outline: {
            text: 'colorSchemes.light_colorblind.colors.btn.outline.text',
            hoverText:
              'colorSchemes.light_colorblind.colors.btn.outline.hoverText',
            hoverBg: 'colorSchemes.light_colorblind.colors.btn.outline.hoverBg',
            hoverBorder:
              'colorSchemes.light_colorblind.colors.btn.outline.hoverBorder',
            hoverCounterBg:
              'colorSchemes.light_colorblind.colors.btn.outline.hoverCounterBg',
            selectedText:
              'colorSchemes.light_colorblind.colors.btn.outline.selectedText',
            selectedBg:
              'colorSchemes.light_colorblind.colors.btn.outline.selectedBg',
            selectedBorder:
              'colorSchemes.light_colorblind.colors.btn.outline.selectedBorder',
            disabledText:
              'colorSchemes.light_colorblind.colors.btn.outline.disabledText',
            disabledBg:
              'colorSchemes.light_colorblind.colors.btn.outline.disabledBg',
            disabledCounterBg:
              'colorSchemes.light_colorblind.colors.btn.outline.disabledCounterBg',
            counterBg:
              'colorSchemes.light_colorblind.colors.btn.outline.counterBg',
          },
          danger: {
            text: 'colorSchemes.light_colorblind.colors.btn.danger.text',
            hoverText:
              'colorSchemes.light_colorblind.colors.btn.danger.hoverText',
            hoverBg: 'colorSchemes.light_colorblind.colors.btn.danger.hoverBg',
            hoverBorder:
              'colorSchemes.light_colorblind.colors.btn.danger.hoverBorder',
            hoverCounterBg:
              'colorSchemes.light_colorblind.colors.btn.danger.hoverCounterBg',
            selectedText:
              'colorSchemes.light_colorblind.colors.btn.danger.selectedText',
            selectedBg:
              'colorSchemes.light_colorblind.colors.btn.danger.selectedBg',
            selectedBorder:
              'colorSchemes.light_colorblind.colors.btn.danger.selectedBorder',
            disabledText:
              'colorSchemes.light_colorblind.colors.btn.danger.disabledText',
            disabledBg:
              'colorSchemes.light_colorblind.colors.btn.danger.disabledBg',
            disabledCounterBg:
              'colorSchemes.light_colorblind.colors.btn.danger.disabledCounterBg',
            counterBg:
              'colorSchemes.light_colorblind.colors.btn.danger.counterBg',
            icon: 'colorSchemes.light_colorblind.colors.btn.danger.icon',
            hoverIcon:
              'colorSchemes.light_colorblind.colors.btn.danger.hoverIcon',
          },
        },
        underlinenav: {
          icon: 'colorSchemes.light_colorblind.colors.underlinenav.icon',
          borderHover:
            'colorSchemes.light_colorblind.colors.underlinenav.borderHover',
        },
        actionListItem: {
          inlineDivider:
            'colorSchemes.light_colorblind.colors.actionListItem.inlineDivider',
          default: {
            hoverBg:
              'colorSchemes.light_colorblind.colors.actionListItem.default.hoverBg',
            hoverBorder:
              'colorSchemes.light_colorblind.colors.actionListItem.default.hoverBorder',
            activeBg:
              'colorSchemes.light_colorblind.colors.actionListItem.default.activeBg',
            activeBorder:
              'colorSchemes.light_colorblind.colors.actionListItem.default.activeBorder',
            selectedBg:
              'colorSchemes.light_colorblind.colors.actionListItem.default.selectedBg',
          },
          danger: {
            hoverBg:
              'colorSchemes.light_colorblind.colors.actionListItem.danger.hoverBg',
            activeBg:
              'colorSchemes.light_colorblind.colors.actionListItem.danger.activeBg',
            hoverText:
              'colorSchemes.light_colorblind.colors.actionListItem.danger.hoverText',
          },
        },
        switchTrack: {
          bg: 'colorSchemes.light_colorblind.colors.switchTrack.bg',
          hoverBg: 'colorSchemes.light_colorblind.colors.switchTrack.hoverBg',
          activeBg: 'colorSchemes.light_colorblind.colors.switchTrack.activeBg',
          disabledBg:
            'colorSchemes.light_colorblind.colors.switchTrack.disabledBg',
          fg: 'colorSchemes.light_colorblind.colors.switchTrack.fg',
          disabledFg:
            'colorSchemes.light_colorblind.colors.switchTrack.disabledFg',
          border: 'colorSchemes.light_colorblind.colors.switchTrack.border',
          checked: {
            bg: 'colorSchemes.light_colorblind.colors.switchTrack.checked.bg',
            hoverBg:
              'colorSchemes.light_colorblind.colors.switchTrack.checked.hoverBg',
            activeBg:
              'colorSchemes.light_colorblind.colors.switchTrack.checked.activeBg',
            fg: 'colorSchemes.light_colorblind.colors.switchTrack.checked.fg',
            disabledFg:
              'colorSchemes.light_colorblind.colors.switchTrack.checked.disabledFg',
            border:
              'colorSchemes.light_colorblind.colors.switchTrack.checked.border',
          },
        },
        switchKnob: {
          bg: 'colorSchemes.light_colorblind.colors.switchKnob.bg',
          disabledBg:
            'colorSchemes.light_colorblind.colors.switchKnob.disabledBg',
          border: 'colorSchemes.light_colorblind.colors.switchKnob.border',
          checked: {
            bg: 'colorSchemes.light_colorblind.colors.switchKnob.checked.bg',
            disabledBg:
              'colorSchemes.light_colorblind.colors.switchKnob.checked.disabledBg',
            border:
              'colorSchemes.light_colorblind.colors.switchKnob.checked.border',
          },
        },
        segmentedControl: {
          bg: 'colorSchemes.light_colorblind.colors.segmentedControl.bg',
          button: {
            bg: 'colorSchemes.light_colorblind.colors.segmentedControl.button.bg',
            hover: {
              bg: 'colorSchemes.light_colorblind.colors.segmentedControl.button.hover.bg',
            },
            active: {
              bg: 'colorSchemes.light_colorblind.colors.segmentedControl.button.active.bg',
            },
            selected: {
              border:
                'colorSchemes.light_colorblind.colors.segmentedControl.button.selected.border',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg:
              'colorSchemes.light_colorblind.colors.treeViewItem.chevron.hoverBg',
          },
          directory: {
            fill: 'colorSchemes.light_colorblind.colors.treeViewItem.directory.fill',
          },
        },
        fg: {
          default: 'colorSchemes.light_colorblind.colors.fg.default',
          muted: 'colorSchemes.light_colorblind.colors.fg.muted',
          subtle: 'colorSchemes.light_colorblind.colors.fg.subtle',
          onEmphasis: 'colorSchemes.light_colorblind.colors.fg.onEmphasis',
        },
        canvas: {
          default: 'colorSchemes.light_colorblind.colors.canvas.default',
          overlay: 'colorSchemes.light_colorblind.colors.canvas.overlay',
          inset: 'colorSchemes.light_colorblind.colors.canvas.inset',
          subtle: 'colorSchemes.light_colorblind.colors.canvas.subtle',
        },
        border: {
          default: 'colorSchemes.light_colorblind.colors.border.default',
          muted: 'colorSchemes.light_colorblind.colors.border.muted',
          subtle: 'colorSchemes.light_colorblind.colors.border.subtle',
        },
        neutral: {
          emphasisPlus:
            'colorSchemes.light_colorblind.colors.neutral.emphasisPlus',
          emphasis: 'colorSchemes.light_colorblind.colors.neutral.emphasis',
          muted: 'colorSchemes.light_colorblind.colors.neutral.muted',
          subtle: 'colorSchemes.light_colorblind.colors.neutral.subtle',
        },
        accent: {
          fg: 'colorSchemes.light_colorblind.colors.accent.fg',
          emphasis: 'colorSchemes.light_colorblind.colors.accent.emphasis',
          muted: 'colorSchemes.light_colorblind.colors.accent.muted',
          subtle: 'colorSchemes.light_colorblind.colors.accent.subtle',
        },
        success: {
          fg: 'colorSchemes.light_colorblind.colors.success.fg',
          emphasis: 'colorSchemes.light_colorblind.colors.success.emphasis',
          muted: 'colorSchemes.light_colorblind.colors.success.muted',
          subtle: 'colorSchemes.light_colorblind.colors.success.subtle',
        },
        attention: {
          fg: 'colorSchemes.light_colorblind.colors.attention.fg',
          emphasis: 'colorSchemes.light_colorblind.colors.attention.emphasis',
          muted: 'colorSchemes.light_colorblind.colors.attention.muted',
          subtle: 'colorSchemes.light_colorblind.colors.attention.subtle',
        },
        severe: {
          fg: 'colorSchemes.light_colorblind.colors.severe.fg',
          emphasis: 'colorSchemes.light_colorblind.colors.severe.emphasis',
          muted: 'colorSchemes.light_colorblind.colors.severe.muted',
          subtle: 'colorSchemes.light_colorblind.colors.severe.subtle',
        },
        danger: {
          fg: 'colorSchemes.light_colorblind.colors.danger.fg',
          emphasis: 'colorSchemes.light_colorblind.colors.danger.emphasis',
          muted: 'colorSchemes.light_colorblind.colors.danger.muted',
          subtle: 'colorSchemes.light_colorblind.colors.danger.subtle',
        },
        open: {
          fg: 'colorSchemes.light_colorblind.colors.open.fg',
          emphasis: 'colorSchemes.light_colorblind.colors.open.emphasis',
          muted: 'colorSchemes.light_colorblind.colors.open.muted',
          subtle: 'colorSchemes.light_colorblind.colors.open.subtle',
        },
        closed: {
          fg: 'colorSchemes.light_colorblind.colors.closed.fg',
          emphasis: 'colorSchemes.light_colorblind.colors.closed.emphasis',
          muted: 'colorSchemes.light_colorblind.colors.closed.muted',
          subtle: 'colorSchemes.light_colorblind.colors.closed.subtle',
        },
        done: {
          fg: 'colorSchemes.light_colorblind.colors.done.fg',
          emphasis: 'colorSchemes.light_colorblind.colors.done.emphasis',
          muted: 'colorSchemes.light_colorblind.colors.done.muted',
          subtle: 'colorSchemes.light_colorblind.colors.done.subtle',
        },
        sponsors: {
          fg: 'colorSchemes.light_colorblind.colors.sponsors.fg',
          emphasis: 'colorSchemes.light_colorblind.colors.sponsors.emphasis',
          muted: 'colorSchemes.light_colorblind.colors.sponsors.muted',
          subtle: 'colorSchemes.light_colorblind.colors.sponsors.subtle',
        },
        primer: {
          fg: {
            disabled: 'colorSchemes.light_colorblind.colors.primer.fg.disabled',
          },
          canvas: {
            backdrop:
              'colorSchemes.light_colorblind.colors.primer.canvas.backdrop',
            sticky: 'colorSchemes.light_colorblind.colors.primer.canvas.sticky',
          },
          border: {
            active: 'colorSchemes.light_colorblind.colors.primer.border.active',
            contrast:
              'colorSchemes.light_colorblind.colors.primer.border.contrast',
          },
        },
      },
      shadows: {
        mktg: {
          btn: {
            shadow: {
              outline:
                'colorSchemes.light_colorblind.shadows.mktg.btn.shadow.outline',
              focus:
                'colorSchemes.light_colorblind.shadows.mktg.btn.shadow.focus',
              hover:
                'colorSchemes.light_colorblind.shadows.mktg.btn.shadow.hover',
              hoverMuted:
                'colorSchemes.light_colorblind.shadows.mktg.btn.shadow.hoverMuted',
            },
          },
        },
        avatar: {
          childShadow:
            'colorSchemes.light_colorblind.shadows.avatar.childShadow',
        },
        overlay: {
          shadow: 'colorSchemes.light_colorblind.shadows.overlay.shadow',
        },
        btn: {
          shadow: 'colorSchemes.light_colorblind.shadows.btn.shadow',
          insetShadow: 'colorSchemes.light_colorblind.shadows.btn.insetShadow',
          primary: {
            shadow: 'colorSchemes.light_colorblind.shadows.btn.primary.shadow',
            insetShadow:
              'colorSchemes.light_colorblind.shadows.btn.primary.insetShadow',
            selectedShadow:
              'colorSchemes.light_colorblind.shadows.btn.primary.selectedShadow',
          },
          outline: {
            hoverShadow:
              'colorSchemes.light_colorblind.shadows.btn.outline.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.light_colorblind.shadows.btn.outline.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.light_colorblind.shadows.btn.outline.selectedShadow',
          },
          danger: {
            hoverShadow:
              'colorSchemes.light_colorblind.shadows.btn.danger.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.light_colorblind.shadows.btn.danger.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.light_colorblind.shadows.btn.danger.selectedShadow',
          },
        },
        shadow: {
          small: 'colorSchemes.light_colorblind.shadows.shadow.small',
          medium: 'colorSchemes.light_colorblind.shadows.shadow.medium',
          large: 'colorSchemes.light_colorblind.shadows.shadow.large',
          extraLarge: 'colorSchemes.light_colorblind.shadows.shadow.extraLarge',
        },
        primer: {
          shadow: {
            highlight:
              'colorSchemes.light_colorblind.shadows.primer.shadow.highlight',
            inset: 'colorSchemes.light_colorblind.shadows.primer.shadow.inset',
          },
        },
      },
    },
    light_tritanopia: {
      colors: {
        canvasDefaultTransparent:
          'colorSchemes.light_tritanopia.colors.canvasDefaultTransparent',
        pageHeaderBg: 'colorSchemes.light_tritanopia.colors.pageHeaderBg',
        marketingIcon: {
          primary: 'colorSchemes.light_tritanopia.colors.marketingIcon.primary',
          secondary:
            'colorSchemes.light_tritanopia.colors.marketingIcon.secondary',
        },
        diffBlob: {
          addition: {
            numText:
              'colorSchemes.light_tritanopia.colors.diffBlob.addition.numText',
            fg: 'colorSchemes.light_tritanopia.colors.diffBlob.addition.fg',
            numBg:
              'colorSchemes.light_tritanopia.colors.diffBlob.addition.numBg',
            lineBg:
              'colorSchemes.light_tritanopia.colors.diffBlob.addition.lineBg',
            wordBg:
              'colorSchemes.light_tritanopia.colors.diffBlob.addition.wordBg',
          },
          deletion: {
            numText:
              'colorSchemes.light_tritanopia.colors.diffBlob.deletion.numText',
            fg: 'colorSchemes.light_tritanopia.colors.diffBlob.deletion.fg',
            numBg:
              'colorSchemes.light_tritanopia.colors.diffBlob.deletion.numBg',
            lineBg:
              'colorSchemes.light_tritanopia.colors.diffBlob.deletion.lineBg',
            wordBg:
              'colorSchemes.light_tritanopia.colors.diffBlob.deletion.wordBg',
          },
          hunk: {
            numBg: 'colorSchemes.light_tritanopia.colors.diffBlob.hunk.numBg',
          },
          expander: {
            icon: 'colorSchemes.light_tritanopia.colors.diffBlob.expander.icon',
          },
        },
        diffstat: {
          deletionBorder:
            'colorSchemes.light_tritanopia.colors.diffstat.deletionBorder',
          additionBorder:
            'colorSchemes.light_tritanopia.colors.diffstat.additionBorder',
          additionBg:
            'colorSchemes.light_tritanopia.colors.diffstat.additionBg',
        },
        searchKeyword: {
          hl: 'colorSchemes.light_tritanopia.colors.searchKeyword.hl',
        },
        prettylights: {
          syntax: {
            comment:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.comment',
            constant:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.constant',
            entity:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.entity',
            storageModifierImport:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.storageModifierImport',
            entityTag:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.entityTag',
            keyword:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.keyword',
            string:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.string',
            variable:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.variable',
            brackethighlighterUnmatched:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.brackethighlighterUnmatched',
            invalidIllegalText:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.invalidIllegalText',
            invalidIllegalBg:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.invalidIllegalBg',
            carriageReturnText:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.carriageReturnText',
            carriageReturnBg:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.carriageReturnBg',
            stringRegexp:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.stringRegexp',
            markupList:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupList',
            markupHeading:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupHeading',
            markupItalic:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupItalic',
            markupBold:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupBold',
            markupDeletedText:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupDeletedText',
            markupDeletedBg:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupDeletedBg',
            markupInsertedText:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupInsertedText',
            markupInsertedBg:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupInsertedBg',
            markupChangedText:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupChangedText',
            markupChangedBg:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupChangedBg',
            markupIgnoredText:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupIgnoredText',
            markupIgnoredBg:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.markupIgnoredBg',
            metaDiffRange:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.metaDiffRange',
            brackethighlighterAngle:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.brackethighlighterAngle',
            sublimelinterGutterMark:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.sublimelinterGutterMark',
            constantOtherReferenceLink:
              'colorSchemes.light_tritanopia.colors.prettylights.syntax.constantOtherReferenceLink',
          },
        },
        codemirror: {
          text: 'colorSchemes.light_tritanopia.colors.codemirror.text',
          bg: 'colorSchemes.light_tritanopia.colors.codemirror.bg',
          guttersBg:
            'colorSchemes.light_tritanopia.colors.codemirror.guttersBg',
          guttermarkerText:
            'colorSchemes.light_tritanopia.colors.codemirror.guttermarkerText',
          guttermarkerSubtleText:
            'colorSchemes.light_tritanopia.colors.codemirror.guttermarkerSubtleText',
          linenumberText:
            'colorSchemes.light_tritanopia.colors.codemirror.linenumberText',
          cursor: 'colorSchemes.light_tritanopia.colors.codemirror.cursor',
          selectionBg:
            'colorSchemes.light_tritanopia.colors.codemirror.selectionBg',
          activelineBg:
            'colorSchemes.light_tritanopia.colors.codemirror.activelineBg',
          matchingbracketText:
            'colorSchemes.light_tritanopia.colors.codemirror.matchingbracketText',
          linesBg: 'colorSchemes.light_tritanopia.colors.codemirror.linesBg',
          syntax: {
            comment:
              'colorSchemes.light_tritanopia.colors.codemirror.syntax.comment',
            constant:
              'colorSchemes.light_tritanopia.colors.codemirror.syntax.constant',
            entity:
              'colorSchemes.light_tritanopia.colors.codemirror.syntax.entity',
            keyword:
              'colorSchemes.light_tritanopia.colors.codemirror.syntax.keyword',
            storage:
              'colorSchemes.light_tritanopia.colors.codemirror.syntax.storage',
            string:
              'colorSchemes.light_tritanopia.colors.codemirror.syntax.string',
            support:
              'colorSchemes.light_tritanopia.colors.codemirror.syntax.support',
            variable:
              'colorSchemes.light_tritanopia.colors.codemirror.syntax.variable',
          },
        },
        checks: {
          bg: 'colorSchemes.light_tritanopia.colors.checks.bg',
          textPrimary:
            'colorSchemes.light_tritanopia.colors.checks.textPrimary',
          textSecondary:
            'colorSchemes.light_tritanopia.colors.checks.textSecondary',
          textLink: 'colorSchemes.light_tritanopia.colors.checks.textLink',
          btnIcon: 'colorSchemes.light_tritanopia.colors.checks.btnIcon',
          btnHoverIcon:
            'colorSchemes.light_tritanopia.colors.checks.btnHoverIcon',
          btnHoverBg: 'colorSchemes.light_tritanopia.colors.checks.btnHoverBg',
          inputText: 'colorSchemes.light_tritanopia.colors.checks.inputText',
          inputPlaceholderText:
            'colorSchemes.light_tritanopia.colors.checks.inputPlaceholderText',
          inputFocusText:
            'colorSchemes.light_tritanopia.colors.checks.inputFocusText',
          inputBg: 'colorSchemes.light_tritanopia.colors.checks.inputBg',
          donutError: 'colorSchemes.light_tritanopia.colors.checks.donutError',
          donutPending:
            'colorSchemes.light_tritanopia.colors.checks.donutPending',
          donutSuccess:
            'colorSchemes.light_tritanopia.colors.checks.donutSuccess',
          donutNeutral:
            'colorSchemes.light_tritanopia.colors.checks.donutNeutral',
          dropdownText:
            'colorSchemes.light_tritanopia.colors.checks.dropdownText',
          dropdownBg: 'colorSchemes.light_tritanopia.colors.checks.dropdownBg',
          dropdownBorder:
            'colorSchemes.light_tritanopia.colors.checks.dropdownBorder',
          dropdownShadow:
            'colorSchemes.light_tritanopia.colors.checks.dropdownShadow',
          dropdownHoverText:
            'colorSchemes.light_tritanopia.colors.checks.dropdownHoverText',
          dropdownHoverBg:
            'colorSchemes.light_tritanopia.colors.checks.dropdownHoverBg',
          dropdownBtnHoverText:
            'colorSchemes.light_tritanopia.colors.checks.dropdownBtnHoverText',
          dropdownBtnHoverBg:
            'colorSchemes.light_tritanopia.colors.checks.dropdownBtnHoverBg',
          scrollbarThumbBg:
            'colorSchemes.light_tritanopia.colors.checks.scrollbarThumbBg',
          headerLabelText:
            'colorSchemes.light_tritanopia.colors.checks.headerLabelText',
          headerLabelOpenText:
            'colorSchemes.light_tritanopia.colors.checks.headerLabelOpenText',
          headerBorder:
            'colorSchemes.light_tritanopia.colors.checks.headerBorder',
          headerIcon: 'colorSchemes.light_tritanopia.colors.checks.headerIcon',
          lineText: 'colorSchemes.light_tritanopia.colors.checks.lineText',
          lineNumText:
            'colorSchemes.light_tritanopia.colors.checks.lineNumText',
          lineTimestampText:
            'colorSchemes.light_tritanopia.colors.checks.lineTimestampText',
          lineHoverBg:
            'colorSchemes.light_tritanopia.colors.checks.lineHoverBg',
          lineSelectedBg:
            'colorSchemes.light_tritanopia.colors.checks.lineSelectedBg',
          lineSelectedNumText:
            'colorSchemes.light_tritanopia.colors.checks.lineSelectedNumText',
          lineDtFmText:
            'colorSchemes.light_tritanopia.colors.checks.lineDtFmText',
          lineDtFmBg: 'colorSchemes.light_tritanopia.colors.checks.lineDtFmBg',
          gateBg: 'colorSchemes.light_tritanopia.colors.checks.gateBg',
          gateText: 'colorSchemes.light_tritanopia.colors.checks.gateText',
          gateWaitingText:
            'colorSchemes.light_tritanopia.colors.checks.gateWaitingText',
          stepHeaderOpenBg:
            'colorSchemes.light_tritanopia.colors.checks.stepHeaderOpenBg',
          stepErrorText:
            'colorSchemes.light_tritanopia.colors.checks.stepErrorText',
          stepWarningText:
            'colorSchemes.light_tritanopia.colors.checks.stepWarningText',
          loglineText:
            'colorSchemes.light_tritanopia.colors.checks.loglineText',
          loglineNumText:
            'colorSchemes.light_tritanopia.colors.checks.loglineNumText',
          loglineDebugText:
            'colorSchemes.light_tritanopia.colors.checks.loglineDebugText',
          loglineErrorText:
            'colorSchemes.light_tritanopia.colors.checks.loglineErrorText',
          loglineErrorNumText:
            'colorSchemes.light_tritanopia.colors.checks.loglineErrorNumText',
          loglineErrorBg:
            'colorSchemes.light_tritanopia.colors.checks.loglineErrorBg',
          loglineWarningText:
            'colorSchemes.light_tritanopia.colors.checks.loglineWarningText',
          loglineWarningNumText:
            'colorSchemes.light_tritanopia.colors.checks.loglineWarningNumText',
          loglineWarningBg:
            'colorSchemes.light_tritanopia.colors.checks.loglineWarningBg',
          loglineCommandText:
            'colorSchemes.light_tritanopia.colors.checks.loglineCommandText',
          loglineSectionText:
            'colorSchemes.light_tritanopia.colors.checks.loglineSectionText',
          ansi: {
            black: 'colorSchemes.light_tritanopia.colors.checks.ansi.black',
            blackBright:
              'colorSchemes.light_tritanopia.colors.checks.ansi.blackBright',
            white: 'colorSchemes.light_tritanopia.colors.checks.ansi.white',
            whiteBright:
              'colorSchemes.light_tritanopia.colors.checks.ansi.whiteBright',
            gray: 'colorSchemes.light_tritanopia.colors.checks.ansi.gray',
            red: 'colorSchemes.light_tritanopia.colors.checks.ansi.red',
            redBright:
              'colorSchemes.light_tritanopia.colors.checks.ansi.redBright',
            green: 'colorSchemes.light_tritanopia.colors.checks.ansi.green',
            greenBright:
              'colorSchemes.light_tritanopia.colors.checks.ansi.greenBright',
            yellow: 'colorSchemes.light_tritanopia.colors.checks.ansi.yellow',
            yellowBright:
              'colorSchemes.light_tritanopia.colors.checks.ansi.yellowBright',
            blue: 'colorSchemes.light_tritanopia.colors.checks.ansi.blue',
            blueBright:
              'colorSchemes.light_tritanopia.colors.checks.ansi.blueBright',
            magenta: 'colorSchemes.light_tritanopia.colors.checks.ansi.magenta',
            magentaBright:
              'colorSchemes.light_tritanopia.colors.checks.ansi.magentaBright',
            cyan: 'colorSchemes.light_tritanopia.colors.checks.ansi.cyan',
            cyanBright:
              'colorSchemes.light_tritanopia.colors.checks.ansi.cyanBright',
          },
        },
        project: {
          headerBg: 'colorSchemes.light_tritanopia.colors.project.headerBg',
          sidebarBg: 'colorSchemes.light_tritanopia.colors.project.sidebarBg',
          gradientIn: 'colorSchemes.light_tritanopia.colors.project.gradientIn',
          gradientOut:
            'colorSchemes.light_tritanopia.colors.project.gradientOut',
        },
        mktg: {
          btn: {
            bg: 'colorSchemes.light_tritanopia.colors.mktg.btn.bg',
          },
        },
        control: {
          borderColor: {
            emphasis:
              'colorSchemes.light_tritanopia.colors.control.borderColor.emphasis',
          },
        },
        avatar: {
          bg: 'colorSchemes.light_tritanopia.colors.avatar.bg',
          border: 'colorSchemes.light_tritanopia.colors.avatar.border',
          stackFade: 'colorSchemes.light_tritanopia.colors.avatar.stackFade',
          stackFadeMore:
            'colorSchemes.light_tritanopia.colors.avatar.stackFadeMore',
        },
        topicTag: {
          border: 'colorSchemes.light_tritanopia.colors.topicTag.border',
        },
        counter: {
          border: 'colorSchemes.light_tritanopia.colors.counter.border',
        },
        selectMenu: {
          backdropBorder:
            'colorSchemes.light_tritanopia.colors.selectMenu.backdropBorder',
          tapHighlight:
            'colorSchemes.light_tritanopia.colors.selectMenu.tapHighlight',
          tapFocusBg:
            'colorSchemes.light_tritanopia.colors.selectMenu.tapFocusBg',
        },
        header: {
          text: 'colorSchemes.light_tritanopia.colors.header.text',
          bg: 'colorSchemes.light_tritanopia.colors.header.bg',
          divider: 'colorSchemes.light_tritanopia.colors.header.divider',
          logo: 'colorSchemes.light_tritanopia.colors.header.logo',
        },
        headerSearch: {
          bg: 'colorSchemes.light_tritanopia.colors.headerSearch.bg',
          border: 'colorSchemes.light_tritanopia.colors.headerSearch.border',
        },
        sidenav: {
          selectedBg: 'colorSchemes.light_tritanopia.colors.sidenav.selectedBg',
        },
        menu: {
          bgActive: 'colorSchemes.light_tritanopia.colors.menu.bgActive',
        },
        input: {
          disabledBg: 'colorSchemes.light_tritanopia.colors.input.disabledBg',
        },
        timeline: {
          badgeBg: 'colorSchemes.light_tritanopia.colors.timeline.badgeBg',
        },
        ansi: {
          black: 'colorSchemes.light_tritanopia.colors.ansi.black',
          blackBright: 'colorSchemes.light_tritanopia.colors.ansi.blackBright',
          white: 'colorSchemes.light_tritanopia.colors.ansi.white',
          whiteBright: 'colorSchemes.light_tritanopia.colors.ansi.whiteBright',
          gray: 'colorSchemes.light_tritanopia.colors.ansi.gray',
          red: 'colorSchemes.light_tritanopia.colors.ansi.red',
          redBright: 'colorSchemes.light_tritanopia.colors.ansi.redBright',
          green: 'colorSchemes.light_tritanopia.colors.ansi.green',
          greenBright: 'colorSchemes.light_tritanopia.colors.ansi.greenBright',
          yellow: 'colorSchemes.light_tritanopia.colors.ansi.yellow',
          yellowBright:
            'colorSchemes.light_tritanopia.colors.ansi.yellowBright',
          blue: 'colorSchemes.light_tritanopia.colors.ansi.blue',
          blueBright: 'colorSchemes.light_tritanopia.colors.ansi.blueBright',
          magenta: 'colorSchemes.light_tritanopia.colors.ansi.magenta',
          magentaBright:
            'colorSchemes.light_tritanopia.colors.ansi.magentaBright',
          cyan: 'colorSchemes.light_tritanopia.colors.ansi.cyan',
          cyanBright: 'colorSchemes.light_tritanopia.colors.ansi.cyanBright',
        },
        btn: {
          text: 'colorSchemes.light_tritanopia.colors.btn.text',
          bg: 'colorSchemes.light_tritanopia.colors.btn.bg',
          border: 'colorSchemes.light_tritanopia.colors.btn.border',
          hoverBg: 'colorSchemes.light_tritanopia.colors.btn.hoverBg',
          hoverBorder: 'colorSchemes.light_tritanopia.colors.btn.hoverBorder',
          activeBg: 'colorSchemes.light_tritanopia.colors.btn.activeBg',
          activeBorder: 'colorSchemes.light_tritanopia.colors.btn.activeBorder',
          selectedBg: 'colorSchemes.light_tritanopia.colors.btn.selectedBg',
          counterBg: 'colorSchemes.light_tritanopia.colors.btn.counterBg',
          primary: {
            text: 'colorSchemes.light_tritanopia.colors.btn.primary.text',
            bg: 'colorSchemes.light_tritanopia.colors.btn.primary.bg',
            border: 'colorSchemes.light_tritanopia.colors.btn.primary.border',
            hoverBg: 'colorSchemes.light_tritanopia.colors.btn.primary.hoverBg',
            hoverBorder:
              'colorSchemes.light_tritanopia.colors.btn.primary.hoverBorder',
            selectedBg:
              'colorSchemes.light_tritanopia.colors.btn.primary.selectedBg',
            disabledText:
              'colorSchemes.light_tritanopia.colors.btn.primary.disabledText',
            disabledBg:
              'colorSchemes.light_tritanopia.colors.btn.primary.disabledBg',
            disabledBorder:
              'colorSchemes.light_tritanopia.colors.btn.primary.disabledBorder',
            icon: 'colorSchemes.light_tritanopia.colors.btn.primary.icon',
            counterBg:
              'colorSchemes.light_tritanopia.colors.btn.primary.counterBg',
          },
          outline: {
            text: 'colorSchemes.light_tritanopia.colors.btn.outline.text',
            hoverText:
              'colorSchemes.light_tritanopia.colors.btn.outline.hoverText',
            hoverBg: 'colorSchemes.light_tritanopia.colors.btn.outline.hoverBg',
            hoverBorder:
              'colorSchemes.light_tritanopia.colors.btn.outline.hoverBorder',
            hoverCounterBg:
              'colorSchemes.light_tritanopia.colors.btn.outline.hoverCounterBg',
            selectedText:
              'colorSchemes.light_tritanopia.colors.btn.outline.selectedText',
            selectedBg:
              'colorSchemes.light_tritanopia.colors.btn.outline.selectedBg',
            selectedBorder:
              'colorSchemes.light_tritanopia.colors.btn.outline.selectedBorder',
            disabledText:
              'colorSchemes.light_tritanopia.colors.btn.outline.disabledText',
            disabledBg:
              'colorSchemes.light_tritanopia.colors.btn.outline.disabledBg',
            disabledCounterBg:
              'colorSchemes.light_tritanopia.colors.btn.outline.disabledCounterBg',
            counterBg:
              'colorSchemes.light_tritanopia.colors.btn.outline.counterBg',
          },
          danger: {
            text: 'colorSchemes.light_tritanopia.colors.btn.danger.text',
            hoverText:
              'colorSchemes.light_tritanopia.colors.btn.danger.hoverText',
            hoverBg: 'colorSchemes.light_tritanopia.colors.btn.danger.hoverBg',
            hoverBorder:
              'colorSchemes.light_tritanopia.colors.btn.danger.hoverBorder',
            hoverCounterBg:
              'colorSchemes.light_tritanopia.colors.btn.danger.hoverCounterBg',
            selectedText:
              'colorSchemes.light_tritanopia.colors.btn.danger.selectedText',
            selectedBg:
              'colorSchemes.light_tritanopia.colors.btn.danger.selectedBg',
            selectedBorder:
              'colorSchemes.light_tritanopia.colors.btn.danger.selectedBorder',
            disabledText:
              'colorSchemes.light_tritanopia.colors.btn.danger.disabledText',
            disabledBg:
              'colorSchemes.light_tritanopia.colors.btn.danger.disabledBg',
            disabledCounterBg:
              'colorSchemes.light_tritanopia.colors.btn.danger.disabledCounterBg',
            counterBg:
              'colorSchemes.light_tritanopia.colors.btn.danger.counterBg',
            icon: 'colorSchemes.light_tritanopia.colors.btn.danger.icon',
            hoverIcon:
              'colorSchemes.light_tritanopia.colors.btn.danger.hoverIcon',
          },
        },
        underlinenav: {
          icon: 'colorSchemes.light_tritanopia.colors.underlinenav.icon',
          borderHover:
            'colorSchemes.light_tritanopia.colors.underlinenav.borderHover',
        },
        actionListItem: {
          inlineDivider:
            'colorSchemes.light_tritanopia.colors.actionListItem.inlineDivider',
          default: {
            hoverBg:
              'colorSchemes.light_tritanopia.colors.actionListItem.default.hoverBg',
            hoverBorder:
              'colorSchemes.light_tritanopia.colors.actionListItem.default.hoverBorder',
            activeBg:
              'colorSchemes.light_tritanopia.colors.actionListItem.default.activeBg',
            activeBorder:
              'colorSchemes.light_tritanopia.colors.actionListItem.default.activeBorder',
            selectedBg:
              'colorSchemes.light_tritanopia.colors.actionListItem.default.selectedBg',
          },
          danger: {
            hoverBg:
              'colorSchemes.light_tritanopia.colors.actionListItem.danger.hoverBg',
            activeBg:
              'colorSchemes.light_tritanopia.colors.actionListItem.danger.activeBg',
            hoverText:
              'colorSchemes.light_tritanopia.colors.actionListItem.danger.hoverText',
          },
        },
        switchTrack: {
          bg: 'colorSchemes.light_tritanopia.colors.switchTrack.bg',
          hoverBg: 'colorSchemes.light_tritanopia.colors.switchTrack.hoverBg',
          activeBg: 'colorSchemes.light_tritanopia.colors.switchTrack.activeBg',
          disabledBg:
            'colorSchemes.light_tritanopia.colors.switchTrack.disabledBg',
          fg: 'colorSchemes.light_tritanopia.colors.switchTrack.fg',
          disabledFg:
            'colorSchemes.light_tritanopia.colors.switchTrack.disabledFg',
          border: 'colorSchemes.light_tritanopia.colors.switchTrack.border',
          checked: {
            bg: 'colorSchemes.light_tritanopia.colors.switchTrack.checked.bg',
            hoverBg:
              'colorSchemes.light_tritanopia.colors.switchTrack.checked.hoverBg',
            activeBg:
              'colorSchemes.light_tritanopia.colors.switchTrack.checked.activeBg',
            fg: 'colorSchemes.light_tritanopia.colors.switchTrack.checked.fg',
            disabledFg:
              'colorSchemes.light_tritanopia.colors.switchTrack.checked.disabledFg',
            border:
              'colorSchemes.light_tritanopia.colors.switchTrack.checked.border',
          },
        },
        switchKnob: {
          bg: 'colorSchemes.light_tritanopia.colors.switchKnob.bg',
          disabledBg:
            'colorSchemes.light_tritanopia.colors.switchKnob.disabledBg',
          border: 'colorSchemes.light_tritanopia.colors.switchKnob.border',
          checked: {
            bg: 'colorSchemes.light_tritanopia.colors.switchKnob.checked.bg',
            disabledBg:
              'colorSchemes.light_tritanopia.colors.switchKnob.checked.disabledBg',
            border:
              'colorSchemes.light_tritanopia.colors.switchKnob.checked.border',
          },
        },
        segmentedControl: {
          bg: 'colorSchemes.light_tritanopia.colors.segmentedControl.bg',
          button: {
            bg: 'colorSchemes.light_tritanopia.colors.segmentedControl.button.bg',
            hover: {
              bg: 'colorSchemes.light_tritanopia.colors.segmentedControl.button.hover.bg',
            },
            active: {
              bg: 'colorSchemes.light_tritanopia.colors.segmentedControl.button.active.bg',
            },
            selected: {
              border:
                'colorSchemes.light_tritanopia.colors.segmentedControl.button.selected.border',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg:
              'colorSchemes.light_tritanopia.colors.treeViewItem.chevron.hoverBg',
          },
          directory: {
            fill: 'colorSchemes.light_tritanopia.colors.treeViewItem.directory.fill',
          },
        },
        fg: {
          default: 'colorSchemes.light_tritanopia.colors.fg.default',
          muted: 'colorSchemes.light_tritanopia.colors.fg.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.fg.subtle',
          onEmphasis: 'colorSchemes.light_tritanopia.colors.fg.onEmphasis',
        },
        canvas: {
          default: 'colorSchemes.light_tritanopia.colors.canvas.default',
          overlay: 'colorSchemes.light_tritanopia.colors.canvas.overlay',
          inset: 'colorSchemes.light_tritanopia.colors.canvas.inset',
          subtle: 'colorSchemes.light_tritanopia.colors.canvas.subtle',
        },
        border: {
          default: 'colorSchemes.light_tritanopia.colors.border.default',
          muted: 'colorSchemes.light_tritanopia.colors.border.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.border.subtle',
        },
        neutral: {
          emphasisPlus:
            'colorSchemes.light_tritanopia.colors.neutral.emphasisPlus',
          emphasis: 'colorSchemes.light_tritanopia.colors.neutral.emphasis',
          muted: 'colorSchemes.light_tritanopia.colors.neutral.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.neutral.subtle',
        },
        accent: {
          fg: 'colorSchemes.light_tritanopia.colors.accent.fg',
          emphasis: 'colorSchemes.light_tritanopia.colors.accent.emphasis',
          muted: 'colorSchemes.light_tritanopia.colors.accent.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.accent.subtle',
        },
        success: {
          fg: 'colorSchemes.light_tritanopia.colors.success.fg',
          emphasis: 'colorSchemes.light_tritanopia.colors.success.emphasis',
          muted: 'colorSchemes.light_tritanopia.colors.success.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.success.subtle',
        },
        attention: {
          fg: 'colorSchemes.light_tritanopia.colors.attention.fg',
          emphasis: 'colorSchemes.light_tritanopia.colors.attention.emphasis',
          muted: 'colorSchemes.light_tritanopia.colors.attention.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.attention.subtle',
        },
        severe: {
          fg: 'colorSchemes.light_tritanopia.colors.severe.fg',
          emphasis: 'colorSchemes.light_tritanopia.colors.severe.emphasis',
          muted: 'colorSchemes.light_tritanopia.colors.severe.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.severe.subtle',
        },
        danger: {
          fg: 'colorSchemes.light_tritanopia.colors.danger.fg',
          emphasis: 'colorSchemes.light_tritanopia.colors.danger.emphasis',
          muted: 'colorSchemes.light_tritanopia.colors.danger.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.danger.subtle',
        },
        open: {
          fg: 'colorSchemes.light_tritanopia.colors.open.fg',
          emphasis: 'colorSchemes.light_tritanopia.colors.open.emphasis',
          muted: 'colorSchemes.light_tritanopia.colors.open.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.open.subtle',
        },
        closed: {
          fg: 'colorSchemes.light_tritanopia.colors.closed.fg',
          emphasis: 'colorSchemes.light_tritanopia.colors.closed.emphasis',
          muted: 'colorSchemes.light_tritanopia.colors.closed.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.closed.subtle',
        },
        done: {
          fg: 'colorSchemes.light_tritanopia.colors.done.fg',
          emphasis: 'colorSchemes.light_tritanopia.colors.done.emphasis',
          muted: 'colorSchemes.light_tritanopia.colors.done.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.done.subtle',
        },
        sponsors: {
          fg: 'colorSchemes.light_tritanopia.colors.sponsors.fg',
          emphasis: 'colorSchemes.light_tritanopia.colors.sponsors.emphasis',
          muted: 'colorSchemes.light_tritanopia.colors.sponsors.muted',
          subtle: 'colorSchemes.light_tritanopia.colors.sponsors.subtle',
        },
        primer: {
          fg: {
            disabled: 'colorSchemes.light_tritanopia.colors.primer.fg.disabled',
          },
          canvas: {
            backdrop:
              'colorSchemes.light_tritanopia.colors.primer.canvas.backdrop',
            sticky: 'colorSchemes.light_tritanopia.colors.primer.canvas.sticky',
          },
          border: {
            active: 'colorSchemes.light_tritanopia.colors.primer.border.active',
            contrast:
              'colorSchemes.light_tritanopia.colors.primer.border.contrast',
          },
        },
      },
      shadows: {
        mktg: {
          btn: {
            shadow: {
              outline:
                'colorSchemes.light_tritanopia.shadows.mktg.btn.shadow.outline',
              focus:
                'colorSchemes.light_tritanopia.shadows.mktg.btn.shadow.focus',
              hover:
                'colorSchemes.light_tritanopia.shadows.mktg.btn.shadow.hover',
              hoverMuted:
                'colorSchemes.light_tritanopia.shadows.mktg.btn.shadow.hoverMuted',
            },
          },
        },
        avatar: {
          childShadow:
            'colorSchemes.light_tritanopia.shadows.avatar.childShadow',
        },
        overlay: {
          shadow: 'colorSchemes.light_tritanopia.shadows.overlay.shadow',
        },
        btn: {
          shadow: 'colorSchemes.light_tritanopia.shadows.btn.shadow',
          insetShadow: 'colorSchemes.light_tritanopia.shadows.btn.insetShadow',
          primary: {
            shadow: 'colorSchemes.light_tritanopia.shadows.btn.primary.shadow',
            insetShadow:
              'colorSchemes.light_tritanopia.shadows.btn.primary.insetShadow',
            selectedShadow:
              'colorSchemes.light_tritanopia.shadows.btn.primary.selectedShadow',
          },
          outline: {
            hoverShadow:
              'colorSchemes.light_tritanopia.shadows.btn.outline.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.light_tritanopia.shadows.btn.outline.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.light_tritanopia.shadows.btn.outline.selectedShadow',
          },
          danger: {
            hoverShadow:
              'colorSchemes.light_tritanopia.shadows.btn.danger.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.light_tritanopia.shadows.btn.danger.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.light_tritanopia.shadows.btn.danger.selectedShadow',
          },
        },
        shadow: {
          small: 'colorSchemes.light_tritanopia.shadows.shadow.small',
          medium: 'colorSchemes.light_tritanopia.shadows.shadow.medium',
          large: 'colorSchemes.light_tritanopia.shadows.shadow.large',
          extraLarge: 'colorSchemes.light_tritanopia.shadows.shadow.extraLarge',
        },
        primer: {
          shadow: {
            highlight:
              'colorSchemes.light_tritanopia.shadows.primer.shadow.highlight',
            inset: 'colorSchemes.light_tritanopia.shadows.primer.shadow.inset',
          },
        },
      },
    },
    dark: {
      colors: {
        canvasDefaultTransparent:
          'colorSchemes.dark.colors.canvasDefaultTransparent',
        pageHeaderBg: 'colorSchemes.dark.colors.pageHeaderBg',
        marketingIcon: {
          primary: 'colorSchemes.dark.colors.marketingIcon.primary',
          secondary: 'colorSchemes.dark.colors.marketingIcon.secondary',
        },
        diffBlob: {
          addition: {
            numText: 'colorSchemes.dark.colors.diffBlob.addition.numText',
            fg: 'colorSchemes.dark.colors.diffBlob.addition.fg',
            numBg: 'colorSchemes.dark.colors.diffBlob.addition.numBg',
            lineBg: 'colorSchemes.dark.colors.diffBlob.addition.lineBg',
            wordBg: 'colorSchemes.dark.colors.diffBlob.addition.wordBg',
          },
          deletion: {
            numText: 'colorSchemes.dark.colors.diffBlob.deletion.numText',
            fg: 'colorSchemes.dark.colors.diffBlob.deletion.fg',
            numBg: 'colorSchemes.dark.colors.diffBlob.deletion.numBg',
            lineBg: 'colorSchemes.dark.colors.diffBlob.deletion.lineBg',
            wordBg: 'colorSchemes.dark.colors.diffBlob.deletion.wordBg',
          },
          hunk: {
            numBg: 'colorSchemes.dark.colors.diffBlob.hunk.numBg',
          },
          expander: {
            icon: 'colorSchemes.dark.colors.diffBlob.expander.icon',
          },
        },
        diffstat: {
          deletionBorder: 'colorSchemes.dark.colors.diffstat.deletionBorder',
          additionBorder: 'colorSchemes.dark.colors.diffstat.additionBorder',
          additionBg: 'colorSchemes.dark.colors.diffstat.additionBg',
        },
        searchKeyword: {
          hl: 'colorSchemes.dark.colors.searchKeyword.hl',
        },
        prettylights: {
          syntax: {
            comment: 'colorSchemes.dark.colors.prettylights.syntax.comment',
            constant: 'colorSchemes.dark.colors.prettylights.syntax.constant',
            entity: 'colorSchemes.dark.colors.prettylights.syntax.entity',
            storageModifierImport:
              'colorSchemes.dark.colors.prettylights.syntax.storageModifierImport',
            entityTag: 'colorSchemes.dark.colors.prettylights.syntax.entityTag',
            keyword: 'colorSchemes.dark.colors.prettylights.syntax.keyword',
            string: 'colorSchemes.dark.colors.prettylights.syntax.string',
            variable: 'colorSchemes.dark.colors.prettylights.syntax.variable',
            brackethighlighterUnmatched:
              'colorSchemes.dark.colors.prettylights.syntax.brackethighlighterUnmatched',
            invalidIllegalText:
              'colorSchemes.dark.colors.prettylights.syntax.invalidIllegalText',
            invalidIllegalBg:
              'colorSchemes.dark.colors.prettylights.syntax.invalidIllegalBg',
            carriageReturnText:
              'colorSchemes.dark.colors.prettylights.syntax.carriageReturnText',
            carriageReturnBg:
              'colorSchemes.dark.colors.prettylights.syntax.carriageReturnBg',
            stringRegexp:
              'colorSchemes.dark.colors.prettylights.syntax.stringRegexp',
            markupList:
              'colorSchemes.dark.colors.prettylights.syntax.markupList',
            markupHeading:
              'colorSchemes.dark.colors.prettylights.syntax.markupHeading',
            markupItalic:
              'colorSchemes.dark.colors.prettylights.syntax.markupItalic',
            markupBold:
              'colorSchemes.dark.colors.prettylights.syntax.markupBold',
            markupDeletedText:
              'colorSchemes.dark.colors.prettylights.syntax.markupDeletedText',
            markupDeletedBg:
              'colorSchemes.dark.colors.prettylights.syntax.markupDeletedBg',
            markupInsertedText:
              'colorSchemes.dark.colors.prettylights.syntax.markupInsertedText',
            markupInsertedBg:
              'colorSchemes.dark.colors.prettylights.syntax.markupInsertedBg',
            markupChangedText:
              'colorSchemes.dark.colors.prettylights.syntax.markupChangedText',
            markupChangedBg:
              'colorSchemes.dark.colors.prettylights.syntax.markupChangedBg',
            markupIgnoredText:
              'colorSchemes.dark.colors.prettylights.syntax.markupIgnoredText',
            markupIgnoredBg:
              'colorSchemes.dark.colors.prettylights.syntax.markupIgnoredBg',
            metaDiffRange:
              'colorSchemes.dark.colors.prettylights.syntax.metaDiffRange',
            brackethighlighterAngle:
              'colorSchemes.dark.colors.prettylights.syntax.brackethighlighterAngle',
            sublimelinterGutterMark:
              'colorSchemes.dark.colors.prettylights.syntax.sublimelinterGutterMark',
            constantOtherReferenceLink:
              'colorSchemes.dark.colors.prettylights.syntax.constantOtherReferenceLink',
          },
        },
        codemirror: {
          text: 'colorSchemes.dark.colors.codemirror.text',
          bg: 'colorSchemes.dark.colors.codemirror.bg',
          guttersBg: 'colorSchemes.dark.colors.codemirror.guttersBg',
          guttermarkerText:
            'colorSchemes.dark.colors.codemirror.guttermarkerText',
          guttermarkerSubtleText:
            'colorSchemes.dark.colors.codemirror.guttermarkerSubtleText',
          linenumberText: 'colorSchemes.dark.colors.codemirror.linenumberText',
          cursor: 'colorSchemes.dark.colors.codemirror.cursor',
          selectionBg: 'colorSchemes.dark.colors.codemirror.selectionBg',
          activelineBg: 'colorSchemes.dark.colors.codemirror.activelineBg',
          matchingbracketText:
            'colorSchemes.dark.colors.codemirror.matchingbracketText',
          linesBg: 'colorSchemes.dark.colors.codemirror.linesBg',
          syntax: {
            comment: 'colorSchemes.dark.colors.codemirror.syntax.comment',
            constant: 'colorSchemes.dark.colors.codemirror.syntax.constant',
            entity: 'colorSchemes.dark.colors.codemirror.syntax.entity',
            keyword: 'colorSchemes.dark.colors.codemirror.syntax.keyword',
            storage: 'colorSchemes.dark.colors.codemirror.syntax.storage',
            string: 'colorSchemes.dark.colors.codemirror.syntax.string',
            support: 'colorSchemes.dark.colors.codemirror.syntax.support',
            variable: 'colorSchemes.dark.colors.codemirror.syntax.variable',
          },
        },
        checks: {
          bg: 'colorSchemes.dark.colors.checks.bg',
          textPrimary: 'colorSchemes.dark.colors.checks.textPrimary',
          textSecondary: 'colorSchemes.dark.colors.checks.textSecondary',
          textLink: 'colorSchemes.dark.colors.checks.textLink',
          btnIcon: 'colorSchemes.dark.colors.checks.btnIcon',
          btnHoverIcon: 'colorSchemes.dark.colors.checks.btnHoverIcon',
          btnHoverBg: 'colorSchemes.dark.colors.checks.btnHoverBg',
          inputText: 'colorSchemes.dark.colors.checks.inputText',
          inputPlaceholderText:
            'colorSchemes.dark.colors.checks.inputPlaceholderText',
          inputFocusText: 'colorSchemes.dark.colors.checks.inputFocusText',
          inputBg: 'colorSchemes.dark.colors.checks.inputBg',
          donutError: 'colorSchemes.dark.colors.checks.donutError',
          donutPending: 'colorSchemes.dark.colors.checks.donutPending',
          donutSuccess: 'colorSchemes.dark.colors.checks.donutSuccess',
          donutNeutral: 'colorSchemes.dark.colors.checks.donutNeutral',
          dropdownText: 'colorSchemes.dark.colors.checks.dropdownText',
          dropdownBg: 'colorSchemes.dark.colors.checks.dropdownBg',
          dropdownBorder: 'colorSchemes.dark.colors.checks.dropdownBorder',
          dropdownShadow: 'colorSchemes.dark.colors.checks.dropdownShadow',
          dropdownHoverText:
            'colorSchemes.dark.colors.checks.dropdownHoverText',
          dropdownHoverBg: 'colorSchemes.dark.colors.checks.dropdownHoverBg',
          dropdownBtnHoverText:
            'colorSchemes.dark.colors.checks.dropdownBtnHoverText',
          dropdownBtnHoverBg:
            'colorSchemes.dark.colors.checks.dropdownBtnHoverBg',
          scrollbarThumbBg: 'colorSchemes.dark.colors.checks.scrollbarThumbBg',
          headerLabelText: 'colorSchemes.dark.colors.checks.headerLabelText',
          headerLabelOpenText:
            'colorSchemes.dark.colors.checks.headerLabelOpenText',
          headerBorder: 'colorSchemes.dark.colors.checks.headerBorder',
          headerIcon: 'colorSchemes.dark.colors.checks.headerIcon',
          lineText: 'colorSchemes.dark.colors.checks.lineText',
          lineNumText: 'colorSchemes.dark.colors.checks.lineNumText',
          lineTimestampText:
            'colorSchemes.dark.colors.checks.lineTimestampText',
          lineHoverBg: 'colorSchemes.dark.colors.checks.lineHoverBg',
          lineSelectedBg: 'colorSchemes.dark.colors.checks.lineSelectedBg',
          lineSelectedNumText:
            'colorSchemes.dark.colors.checks.lineSelectedNumText',
          lineDtFmText: 'colorSchemes.dark.colors.checks.lineDtFmText',
          lineDtFmBg: 'colorSchemes.dark.colors.checks.lineDtFmBg',
          gateBg: 'colorSchemes.dark.colors.checks.gateBg',
          gateText: 'colorSchemes.dark.colors.checks.gateText',
          gateWaitingText: 'colorSchemes.dark.colors.checks.gateWaitingText',
          stepHeaderOpenBg: 'colorSchemes.dark.colors.checks.stepHeaderOpenBg',
          stepErrorText: 'colorSchemes.dark.colors.checks.stepErrorText',
          stepWarningText: 'colorSchemes.dark.colors.checks.stepWarningText',
          loglineText: 'colorSchemes.dark.colors.checks.loglineText',
          loglineNumText: 'colorSchemes.dark.colors.checks.loglineNumText',
          loglineDebugText: 'colorSchemes.dark.colors.checks.loglineDebugText',
          loglineErrorText: 'colorSchemes.dark.colors.checks.loglineErrorText',
          loglineErrorNumText:
            'colorSchemes.dark.colors.checks.loglineErrorNumText',
          loglineErrorBg: 'colorSchemes.dark.colors.checks.loglineErrorBg',
          loglineWarningText:
            'colorSchemes.dark.colors.checks.loglineWarningText',
          loglineWarningNumText:
            'colorSchemes.dark.colors.checks.loglineWarningNumText',
          loglineWarningBg: 'colorSchemes.dark.colors.checks.loglineWarningBg',
          loglineCommandText:
            'colorSchemes.dark.colors.checks.loglineCommandText',
          loglineSectionText:
            'colorSchemes.dark.colors.checks.loglineSectionText',
          ansi: {
            black: 'colorSchemes.dark.colors.checks.ansi.black',
            blackBright: 'colorSchemes.dark.colors.checks.ansi.blackBright',
            white: 'colorSchemes.dark.colors.checks.ansi.white',
            whiteBright: 'colorSchemes.dark.colors.checks.ansi.whiteBright',
            gray: 'colorSchemes.dark.colors.checks.ansi.gray',
            red: 'colorSchemes.dark.colors.checks.ansi.red',
            redBright: 'colorSchemes.dark.colors.checks.ansi.redBright',
            green: 'colorSchemes.dark.colors.checks.ansi.green',
            greenBright: 'colorSchemes.dark.colors.checks.ansi.greenBright',
            yellow: 'colorSchemes.dark.colors.checks.ansi.yellow',
            yellowBright: 'colorSchemes.dark.colors.checks.ansi.yellowBright',
            blue: 'colorSchemes.dark.colors.checks.ansi.blue',
            blueBright: 'colorSchemes.dark.colors.checks.ansi.blueBright',
            magenta: 'colorSchemes.dark.colors.checks.ansi.magenta',
            magentaBright: 'colorSchemes.dark.colors.checks.ansi.magentaBright',
            cyan: 'colorSchemes.dark.colors.checks.ansi.cyan',
            cyanBright: 'colorSchemes.dark.colors.checks.ansi.cyanBright',
          },
        },
        project: {
          headerBg: 'colorSchemes.dark.colors.project.headerBg',
          sidebarBg: 'colorSchemes.dark.colors.project.sidebarBg',
          gradientIn: 'colorSchemes.dark.colors.project.gradientIn',
          gradientOut: 'colorSchemes.dark.colors.project.gradientOut',
        },
        mktg: {
          btn: {
            bg: 'colorSchemes.dark.colors.mktg.btn.bg',
          },
        },
        control: {
          borderColor: {
            emphasis: 'colorSchemes.dark.colors.control.borderColor.emphasis',
          },
        },
        avatar: {
          bg: 'colorSchemes.dark.colors.avatar.bg',
          border: 'colorSchemes.dark.colors.avatar.border',
          stackFade: 'colorSchemes.dark.colors.avatar.stackFade',
          stackFadeMore: 'colorSchemes.dark.colors.avatar.stackFadeMore',
        },
        topicTag: {
          border: 'colorSchemes.dark.colors.topicTag.border',
        },
        counter: {
          border: 'colorSchemes.dark.colors.counter.border',
        },
        selectMenu: {
          backdropBorder: 'colorSchemes.dark.colors.selectMenu.backdropBorder',
          tapHighlight: 'colorSchemes.dark.colors.selectMenu.tapHighlight',
          tapFocusBg: 'colorSchemes.dark.colors.selectMenu.tapFocusBg',
        },
        header: {
          text: 'colorSchemes.dark.colors.header.text',
          bg: 'colorSchemes.dark.colors.header.bg',
          divider: 'colorSchemes.dark.colors.header.divider',
          logo: 'colorSchemes.dark.colors.header.logo',
        },
        headerSearch: {
          bg: 'colorSchemes.dark.colors.headerSearch.bg',
          border: 'colorSchemes.dark.colors.headerSearch.border',
        },
        sidenav: {
          selectedBg: 'colorSchemes.dark.colors.sidenav.selectedBg',
        },
        menu: {
          bgActive: 'colorSchemes.dark.colors.menu.bgActive',
        },
        input: {
          disabledBg: 'colorSchemes.dark.colors.input.disabledBg',
        },
        timeline: {
          badgeBg: 'colorSchemes.dark.colors.timeline.badgeBg',
        },
        ansi: {
          black: 'colorSchemes.dark.colors.ansi.black',
          blackBright: 'colorSchemes.dark.colors.ansi.blackBright',
          white: 'colorSchemes.dark.colors.ansi.white',
          whiteBright: 'colorSchemes.dark.colors.ansi.whiteBright',
          gray: 'colorSchemes.dark.colors.ansi.gray',
          red: 'colorSchemes.dark.colors.ansi.red',
          redBright: 'colorSchemes.dark.colors.ansi.redBright',
          green: 'colorSchemes.dark.colors.ansi.green',
          greenBright: 'colorSchemes.dark.colors.ansi.greenBright',
          yellow: 'colorSchemes.dark.colors.ansi.yellow',
          yellowBright: 'colorSchemes.dark.colors.ansi.yellowBright',
          blue: 'colorSchemes.dark.colors.ansi.blue',
          blueBright: 'colorSchemes.dark.colors.ansi.blueBright',
          magenta: 'colorSchemes.dark.colors.ansi.magenta',
          magentaBright: 'colorSchemes.dark.colors.ansi.magentaBright',
          cyan: 'colorSchemes.dark.colors.ansi.cyan',
          cyanBright: 'colorSchemes.dark.colors.ansi.cyanBright',
        },
        btn: {
          text: 'colorSchemes.dark.colors.btn.text',
          bg: 'colorSchemes.dark.colors.btn.bg',
          border: 'colorSchemes.dark.colors.btn.border',
          hoverBg: 'colorSchemes.dark.colors.btn.hoverBg',
          hoverBorder: 'colorSchemes.dark.colors.btn.hoverBorder',
          activeBg: 'colorSchemes.dark.colors.btn.activeBg',
          activeBorder: 'colorSchemes.dark.colors.btn.activeBorder',
          selectedBg: 'colorSchemes.dark.colors.btn.selectedBg',
          counterBg: 'colorSchemes.dark.colors.btn.counterBg',
          primary: {
            text: 'colorSchemes.dark.colors.btn.primary.text',
            bg: 'colorSchemes.dark.colors.btn.primary.bg',
            border: 'colorSchemes.dark.colors.btn.primary.border',
            hoverBg: 'colorSchemes.dark.colors.btn.primary.hoverBg',
            hoverBorder: 'colorSchemes.dark.colors.btn.primary.hoverBorder',
            selectedBg: 'colorSchemes.dark.colors.btn.primary.selectedBg',
            disabledText: 'colorSchemes.dark.colors.btn.primary.disabledText',
            disabledBg: 'colorSchemes.dark.colors.btn.primary.disabledBg',
            disabledBorder:
              'colorSchemes.dark.colors.btn.primary.disabledBorder',
            icon: 'colorSchemes.dark.colors.btn.primary.icon',
            counterBg: 'colorSchemes.dark.colors.btn.primary.counterBg',
          },
          outline: {
            text: 'colorSchemes.dark.colors.btn.outline.text',
            hoverText: 'colorSchemes.dark.colors.btn.outline.hoverText',
            hoverBg: 'colorSchemes.dark.colors.btn.outline.hoverBg',
            hoverBorder: 'colorSchemes.dark.colors.btn.outline.hoverBorder',
            hoverCounterBg:
              'colorSchemes.dark.colors.btn.outline.hoverCounterBg',
            selectedText: 'colorSchemes.dark.colors.btn.outline.selectedText',
            selectedBg: 'colorSchemes.dark.colors.btn.outline.selectedBg',
            selectedBorder:
              'colorSchemes.dark.colors.btn.outline.selectedBorder',
            disabledText: 'colorSchemes.dark.colors.btn.outline.disabledText',
            disabledBg: 'colorSchemes.dark.colors.btn.outline.disabledBg',
            disabledCounterBg:
              'colorSchemes.dark.colors.btn.outline.disabledCounterBg',
            counterBg: 'colorSchemes.dark.colors.btn.outline.counterBg',
          },
          danger: {
            text: 'colorSchemes.dark.colors.btn.danger.text',
            hoverText: 'colorSchemes.dark.colors.btn.danger.hoverText',
            hoverBg: 'colorSchemes.dark.colors.btn.danger.hoverBg',
            hoverBorder: 'colorSchemes.dark.colors.btn.danger.hoverBorder',
            hoverIcon: 'colorSchemes.dark.colors.btn.danger.hoverIcon',
            hoverCounterBg:
              'colorSchemes.dark.colors.btn.danger.hoverCounterBg',
            selectedText: 'colorSchemes.dark.colors.btn.danger.selectedText',
            selectedBg: 'colorSchemes.dark.colors.btn.danger.selectedBg',
            selectedBorder:
              'colorSchemes.dark.colors.btn.danger.selectedBorder',
            disabledText: 'colorSchemes.dark.colors.btn.danger.disabledText',
            disabledBg: 'colorSchemes.dark.colors.btn.danger.disabledBg',
            disabledCounterBg:
              'colorSchemes.dark.colors.btn.danger.disabledCounterBg',
            counterBg: 'colorSchemes.dark.colors.btn.danger.counterBg',
            icon: 'colorSchemes.dark.colors.btn.danger.icon',
          },
        },
        underlinenav: {
          icon: 'colorSchemes.dark.colors.underlinenav.icon',
          borderHover: 'colorSchemes.dark.colors.underlinenav.borderHover',
        },
        actionListItem: {
          inlineDivider:
            'colorSchemes.dark.colors.actionListItem.inlineDivider',
          default: {
            hoverBg: 'colorSchemes.dark.colors.actionListItem.default.hoverBg',
            hoverBorder:
              'colorSchemes.dark.colors.actionListItem.default.hoverBorder',
            activeBg:
              'colorSchemes.dark.colors.actionListItem.default.activeBg',
            activeBorder:
              'colorSchemes.dark.colors.actionListItem.default.activeBorder',
            selectedBg:
              'colorSchemes.dark.colors.actionListItem.default.selectedBg',
          },
          danger: {
            hoverBg: 'colorSchemes.dark.colors.actionListItem.danger.hoverBg',
            activeBg: 'colorSchemes.dark.colors.actionListItem.danger.activeBg',
            hoverText:
              'colorSchemes.dark.colors.actionListItem.danger.hoverText',
          },
        },
        switchTrack: {
          bg: 'colorSchemes.dark.colors.switchTrack.bg',
          hoverBg: 'colorSchemes.dark.colors.switchTrack.hoverBg',
          activeBg: 'colorSchemes.dark.colors.switchTrack.activeBg',
          disabledBg: 'colorSchemes.dark.colors.switchTrack.disabledBg',
          fg: 'colorSchemes.dark.colors.switchTrack.fg',
          disabledFg: 'colorSchemes.dark.colors.switchTrack.disabledFg',
          border: 'colorSchemes.dark.colors.switchTrack.border',
          checked: {
            bg: 'colorSchemes.dark.colors.switchTrack.checked.bg',
            hoverBg: 'colorSchemes.dark.colors.switchTrack.checked.hoverBg',
            activeBg: 'colorSchemes.dark.colors.switchTrack.checked.activeBg',
            fg: 'colorSchemes.dark.colors.switchTrack.checked.fg',
            disabledFg:
              'colorSchemes.dark.colors.switchTrack.checked.disabledFg',
            border: 'colorSchemes.dark.colors.switchTrack.checked.border',
          },
        },
        switchKnob: {
          bg: 'colorSchemes.dark.colors.switchKnob.bg',
          border: 'colorSchemes.dark.colors.switchKnob.border',
          disabledBg: 'colorSchemes.dark.colors.switchKnob.disabledBg',
          checked: {
            bg: 'colorSchemes.dark.colors.switchKnob.checked.bg',
            disabledBg:
              'colorSchemes.dark.colors.switchKnob.checked.disabledBg',
            border: 'colorSchemes.dark.colors.switchKnob.checked.border',
          },
        },
        segmentedControl: {
          bg: 'colorSchemes.dark.colors.segmentedControl.bg',
          button: {
            bg: 'colorSchemes.dark.colors.segmentedControl.button.bg',
            hover: {
              bg: 'colorSchemes.dark.colors.segmentedControl.button.hover.bg',
            },
            active: {
              bg: 'colorSchemes.dark.colors.segmentedControl.button.active.bg',
            },
            selected: {
              border:
                'colorSchemes.dark.colors.segmentedControl.button.selected.border',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg: 'colorSchemes.dark.colors.treeViewItem.chevron.hoverBg',
          },
          directory: {
            fill: 'colorSchemes.dark.colors.treeViewItem.directory.fill',
          },
        },
        fg: {
          default: 'colorSchemes.dark.colors.fg.default',
          muted: 'colorSchemes.dark.colors.fg.muted',
          subtle: 'colorSchemes.dark.colors.fg.subtle',
          onEmphasis: 'colorSchemes.dark.colors.fg.onEmphasis',
        },
        canvas: {
          default: 'colorSchemes.dark.colors.canvas.default',
          overlay: 'colorSchemes.dark.colors.canvas.overlay',
          inset: 'colorSchemes.dark.colors.canvas.inset',
          subtle: 'colorSchemes.dark.colors.canvas.subtle',
        },
        border: {
          default: 'colorSchemes.dark.colors.border.default',
          muted: 'colorSchemes.dark.colors.border.muted',
          subtle: 'colorSchemes.dark.colors.border.subtle',
        },
        neutral: {
          emphasisPlus: 'colorSchemes.dark.colors.neutral.emphasisPlus',
          emphasis: 'colorSchemes.dark.colors.neutral.emphasis',
          muted: 'colorSchemes.dark.colors.neutral.muted',
          subtle: 'colorSchemes.dark.colors.neutral.subtle',
        },
        accent: {
          fg: 'colorSchemes.dark.colors.accent.fg',
          emphasis: 'colorSchemes.dark.colors.accent.emphasis',
          muted: 'colorSchemes.dark.colors.accent.muted',
          subtle: 'colorSchemes.dark.colors.accent.subtle',
        },
        success: {
          fg: 'colorSchemes.dark.colors.success.fg',
          emphasis: 'colorSchemes.dark.colors.success.emphasis',
          muted: 'colorSchemes.dark.colors.success.muted',
          subtle: 'colorSchemes.dark.colors.success.subtle',
        },
        attention: {
          fg: 'colorSchemes.dark.colors.attention.fg',
          emphasis: 'colorSchemes.dark.colors.attention.emphasis',
          muted: 'colorSchemes.dark.colors.attention.muted',
          subtle: 'colorSchemes.dark.colors.attention.subtle',
        },
        severe: {
          fg: 'colorSchemes.dark.colors.severe.fg',
          emphasis: 'colorSchemes.dark.colors.severe.emphasis',
          muted: 'colorSchemes.dark.colors.severe.muted',
          subtle: 'colorSchemes.dark.colors.severe.subtle',
        },
        danger: {
          fg: 'colorSchemes.dark.colors.danger.fg',
          emphasis: 'colorSchemes.dark.colors.danger.emphasis',
          muted: 'colorSchemes.dark.colors.danger.muted',
          subtle: 'colorSchemes.dark.colors.danger.subtle',
        },
        open: {
          fg: 'colorSchemes.dark.colors.open.fg',
          emphasis: 'colorSchemes.dark.colors.open.emphasis',
          muted: 'colorSchemes.dark.colors.open.muted',
          subtle: 'colorSchemes.dark.colors.open.subtle',
        },
        closed: {
          fg: 'colorSchemes.dark.colors.closed.fg',
          emphasis: 'colorSchemes.dark.colors.closed.emphasis',
          muted: 'colorSchemes.dark.colors.closed.muted',
          subtle: 'colorSchemes.dark.colors.closed.subtle',
        },
        done: {
          fg: 'colorSchemes.dark.colors.done.fg',
          emphasis: 'colorSchemes.dark.colors.done.emphasis',
          muted: 'colorSchemes.dark.colors.done.muted',
          subtle: 'colorSchemes.dark.colors.done.subtle',
        },
        sponsors: {
          fg: 'colorSchemes.dark.colors.sponsors.fg',
          emphasis: 'colorSchemes.dark.colors.sponsors.emphasis',
          muted: 'colorSchemes.dark.colors.sponsors.muted',
          subtle: 'colorSchemes.dark.colors.sponsors.subtle',
        },
        primer: {
          fg: {
            disabled: 'colorSchemes.dark.colors.primer.fg.disabled',
          },
          canvas: {
            backdrop: 'colorSchemes.dark.colors.primer.canvas.backdrop',
            sticky: 'colorSchemes.dark.colors.primer.canvas.sticky',
          },
          border: {
            active: 'colorSchemes.dark.colors.primer.border.active',
            contrast: 'colorSchemes.dark.colors.primer.border.contrast',
          },
        },
      },
      shadows: {
        checks: {
          inputShadow: 'colorSchemes.dark.shadows.checks.inputShadow',
        },
        mktg: {
          btn: {
            shadow: {
              outline: 'colorSchemes.dark.shadows.mktg.btn.shadow.outline',
              focus: 'colorSchemes.dark.shadows.mktg.btn.shadow.focus',
              hover: 'colorSchemes.dark.shadows.mktg.btn.shadow.hover',
              hoverMuted:
                'colorSchemes.dark.shadows.mktg.btn.shadow.hoverMuted',
            },
          },
        },
        avatar: {
          childShadow: 'colorSchemes.dark.shadows.avatar.childShadow',
        },
        overlay: {
          shadow: 'colorSchemes.dark.shadows.overlay.shadow',
        },
        btn: {
          shadow: 'colorSchemes.dark.shadows.btn.shadow',
          insetShadow: 'colorSchemes.dark.shadows.btn.insetShadow',
          primary: {
            shadow: 'colorSchemes.dark.shadows.btn.primary.shadow',
            insetShadow: 'colorSchemes.dark.shadows.btn.primary.insetShadow',
            selectedShadow:
              'colorSchemes.dark.shadows.btn.primary.selectedShadow',
          },
          outline: {
            hoverShadow: 'colorSchemes.dark.shadows.btn.outline.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.dark.shadows.btn.outline.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.dark.shadows.btn.outline.selectedShadow',
          },
          danger: {
            hoverShadow: 'colorSchemes.dark.shadows.btn.danger.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.dark.shadows.btn.danger.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.dark.shadows.btn.danger.selectedShadow',
          },
        },
        shadow: {
          small: 'colorSchemes.dark.shadows.shadow.small',
          medium: 'colorSchemes.dark.shadows.shadow.medium',
          large: 'colorSchemes.dark.shadows.shadow.large',
          extraLarge: 'colorSchemes.dark.shadows.shadow.extraLarge',
        },
        primer: {
          shadow: {
            highlight: 'colorSchemes.dark.shadows.primer.shadow.highlight',
            inset: 'colorSchemes.dark.shadows.primer.shadow.inset',
          },
        },
      },
    },
    dark_dimmed: {
      colors: {
        canvasDefaultTransparent:
          'colorSchemes.dark_dimmed.colors.canvasDefaultTransparent',
        pageHeaderBg: 'colorSchemes.dark_dimmed.colors.pageHeaderBg',
        marketingIcon: {
          primary: 'colorSchemes.dark_dimmed.colors.marketingIcon.primary',
          secondary: 'colorSchemes.dark_dimmed.colors.marketingIcon.secondary',
        },
        diffBlob: {
          addition: {
            numText:
              'colorSchemes.dark_dimmed.colors.diffBlob.addition.numText',
            fg: 'colorSchemes.dark_dimmed.colors.diffBlob.addition.fg',
            numBg: 'colorSchemes.dark_dimmed.colors.diffBlob.addition.numBg',
            lineBg: 'colorSchemes.dark_dimmed.colors.diffBlob.addition.lineBg',
            wordBg: 'colorSchemes.dark_dimmed.colors.diffBlob.addition.wordBg',
          },
          deletion: {
            numText:
              'colorSchemes.dark_dimmed.colors.diffBlob.deletion.numText',
            fg: 'colorSchemes.dark_dimmed.colors.diffBlob.deletion.fg',
            numBg: 'colorSchemes.dark_dimmed.colors.diffBlob.deletion.numBg',
            lineBg: 'colorSchemes.dark_dimmed.colors.diffBlob.deletion.lineBg',
            wordBg: 'colorSchemes.dark_dimmed.colors.diffBlob.deletion.wordBg',
          },
          hunk: {
            numBg: 'colorSchemes.dark_dimmed.colors.diffBlob.hunk.numBg',
          },
          expander: {
            icon: 'colorSchemes.dark_dimmed.colors.diffBlob.expander.icon',
          },
        },
        diffstat: {
          deletionBorder:
            'colorSchemes.dark_dimmed.colors.diffstat.deletionBorder',
          additionBorder:
            'colorSchemes.dark_dimmed.colors.diffstat.additionBorder',
          additionBg: 'colorSchemes.dark_dimmed.colors.diffstat.additionBg',
        },
        searchKeyword: {
          hl: 'colorSchemes.dark_dimmed.colors.searchKeyword.hl',
        },
        prettylights: {
          syntax: {
            comment:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.comment',
            constant:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.constant',
            entity:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.entity',
            storageModifierImport:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.storageModifierImport',
            entityTag:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.entityTag',
            keyword:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.keyword',
            string:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.string',
            variable:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.variable',
            brackethighlighterUnmatched:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.brackethighlighterUnmatched',
            invalidIllegalText:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.invalidIllegalText',
            invalidIllegalBg:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.invalidIllegalBg',
            carriageReturnText:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.carriageReturnText',
            carriageReturnBg:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.carriageReturnBg',
            stringRegexp:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.stringRegexp',
            markupList:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupList',
            markupHeading:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupHeading',
            markupItalic:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupItalic',
            markupBold:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupBold',
            markupDeletedText:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupDeletedText',
            markupDeletedBg:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupDeletedBg',
            markupInsertedText:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupInsertedText',
            markupInsertedBg:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupInsertedBg',
            markupChangedText:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupChangedText',
            markupChangedBg:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupChangedBg',
            markupIgnoredText:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupIgnoredText',
            markupIgnoredBg:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.markupIgnoredBg',
            metaDiffRange:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.metaDiffRange',
            brackethighlighterAngle:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.brackethighlighterAngle',
            sublimelinterGutterMark:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.sublimelinterGutterMark',
            constantOtherReferenceLink:
              'colorSchemes.dark_dimmed.colors.prettylights.syntax.constantOtherReferenceLink',
          },
        },
        codemirror: {
          text: 'colorSchemes.dark_dimmed.colors.codemirror.text',
          bg: 'colorSchemes.dark_dimmed.colors.codemirror.bg',
          guttersBg: 'colorSchemes.dark_dimmed.colors.codemirror.guttersBg',
          guttermarkerText:
            'colorSchemes.dark_dimmed.colors.codemirror.guttermarkerText',
          guttermarkerSubtleText:
            'colorSchemes.dark_dimmed.colors.codemirror.guttermarkerSubtleText',
          linenumberText:
            'colorSchemes.dark_dimmed.colors.codemirror.linenumberText',
          cursor: 'colorSchemes.dark_dimmed.colors.codemirror.cursor',
          selectionBg: 'colorSchemes.dark_dimmed.colors.codemirror.selectionBg',
          activelineBg:
            'colorSchemes.dark_dimmed.colors.codemirror.activelineBg',
          matchingbracketText:
            'colorSchemes.dark_dimmed.colors.codemirror.matchingbracketText',
          linesBg: 'colorSchemes.dark_dimmed.colors.codemirror.linesBg',
          syntax: {
            comment:
              'colorSchemes.dark_dimmed.colors.codemirror.syntax.comment',
            constant:
              'colorSchemes.dark_dimmed.colors.codemirror.syntax.constant',
            entity: 'colorSchemes.dark_dimmed.colors.codemirror.syntax.entity',
            keyword:
              'colorSchemes.dark_dimmed.colors.codemirror.syntax.keyword',
            storage:
              'colorSchemes.dark_dimmed.colors.codemirror.syntax.storage',
            string: 'colorSchemes.dark_dimmed.colors.codemirror.syntax.string',
            support:
              'colorSchemes.dark_dimmed.colors.codemirror.syntax.support',
            variable:
              'colorSchemes.dark_dimmed.colors.codemirror.syntax.variable',
          },
        },
        checks: {
          bg: 'colorSchemes.dark_dimmed.colors.checks.bg',
          textPrimary: 'colorSchemes.dark_dimmed.colors.checks.textPrimary',
          textSecondary: 'colorSchemes.dark_dimmed.colors.checks.textSecondary',
          textLink: 'colorSchemes.dark_dimmed.colors.checks.textLink',
          btnIcon: 'colorSchemes.dark_dimmed.colors.checks.btnIcon',
          btnHoverIcon: 'colorSchemes.dark_dimmed.colors.checks.btnHoverIcon',
          btnHoverBg: 'colorSchemes.dark_dimmed.colors.checks.btnHoverBg',
          inputText: 'colorSchemes.dark_dimmed.colors.checks.inputText',
          inputPlaceholderText:
            'colorSchemes.dark_dimmed.colors.checks.inputPlaceholderText',
          inputFocusText:
            'colorSchemes.dark_dimmed.colors.checks.inputFocusText',
          inputBg: 'colorSchemes.dark_dimmed.colors.checks.inputBg',
          donutError: 'colorSchemes.dark_dimmed.colors.checks.donutError',
          donutPending: 'colorSchemes.dark_dimmed.colors.checks.donutPending',
          donutSuccess: 'colorSchemes.dark_dimmed.colors.checks.donutSuccess',
          donutNeutral: 'colorSchemes.dark_dimmed.colors.checks.donutNeutral',
          dropdownText: 'colorSchemes.dark_dimmed.colors.checks.dropdownText',
          dropdownBg: 'colorSchemes.dark_dimmed.colors.checks.dropdownBg',
          dropdownBorder:
            'colorSchemes.dark_dimmed.colors.checks.dropdownBorder',
          dropdownShadow:
            'colorSchemes.dark_dimmed.colors.checks.dropdownShadow',
          dropdownHoverText:
            'colorSchemes.dark_dimmed.colors.checks.dropdownHoverText',
          dropdownHoverBg:
            'colorSchemes.dark_dimmed.colors.checks.dropdownHoverBg',
          dropdownBtnHoverText:
            'colorSchemes.dark_dimmed.colors.checks.dropdownBtnHoverText',
          dropdownBtnHoverBg:
            'colorSchemes.dark_dimmed.colors.checks.dropdownBtnHoverBg',
          scrollbarThumbBg:
            'colorSchemes.dark_dimmed.colors.checks.scrollbarThumbBg',
          headerLabelText:
            'colorSchemes.dark_dimmed.colors.checks.headerLabelText',
          headerLabelOpenText:
            'colorSchemes.dark_dimmed.colors.checks.headerLabelOpenText',
          headerBorder: 'colorSchemes.dark_dimmed.colors.checks.headerBorder',
          headerIcon: 'colorSchemes.dark_dimmed.colors.checks.headerIcon',
          lineText: 'colorSchemes.dark_dimmed.colors.checks.lineText',
          lineNumText: 'colorSchemes.dark_dimmed.colors.checks.lineNumText',
          lineTimestampText:
            'colorSchemes.dark_dimmed.colors.checks.lineTimestampText',
          lineHoverBg: 'colorSchemes.dark_dimmed.colors.checks.lineHoverBg',
          lineSelectedBg:
            'colorSchemes.dark_dimmed.colors.checks.lineSelectedBg',
          lineSelectedNumText:
            'colorSchemes.dark_dimmed.colors.checks.lineSelectedNumText',
          lineDtFmText: 'colorSchemes.dark_dimmed.colors.checks.lineDtFmText',
          lineDtFmBg: 'colorSchemes.dark_dimmed.colors.checks.lineDtFmBg',
          gateBg: 'colorSchemes.dark_dimmed.colors.checks.gateBg',
          gateText: 'colorSchemes.dark_dimmed.colors.checks.gateText',
          gateWaitingText:
            'colorSchemes.dark_dimmed.colors.checks.gateWaitingText',
          stepHeaderOpenBg:
            'colorSchemes.dark_dimmed.colors.checks.stepHeaderOpenBg',
          stepErrorText: 'colorSchemes.dark_dimmed.colors.checks.stepErrorText',
          stepWarningText:
            'colorSchemes.dark_dimmed.colors.checks.stepWarningText',
          loglineText: 'colorSchemes.dark_dimmed.colors.checks.loglineText',
          loglineNumText:
            'colorSchemes.dark_dimmed.colors.checks.loglineNumText',
          loglineDebugText:
            'colorSchemes.dark_dimmed.colors.checks.loglineDebugText',
          loglineErrorText:
            'colorSchemes.dark_dimmed.colors.checks.loglineErrorText',
          loglineErrorNumText:
            'colorSchemes.dark_dimmed.colors.checks.loglineErrorNumText',
          loglineErrorBg:
            'colorSchemes.dark_dimmed.colors.checks.loglineErrorBg',
          loglineWarningText:
            'colorSchemes.dark_dimmed.colors.checks.loglineWarningText',
          loglineWarningNumText:
            'colorSchemes.dark_dimmed.colors.checks.loglineWarningNumText',
          loglineWarningBg:
            'colorSchemes.dark_dimmed.colors.checks.loglineWarningBg',
          loglineCommandText:
            'colorSchemes.dark_dimmed.colors.checks.loglineCommandText',
          loglineSectionText:
            'colorSchemes.dark_dimmed.colors.checks.loglineSectionText',
          ansi: {
            black: 'colorSchemes.dark_dimmed.colors.checks.ansi.black',
            blackBright:
              'colorSchemes.dark_dimmed.colors.checks.ansi.blackBright',
            white: 'colorSchemes.dark_dimmed.colors.checks.ansi.white',
            whiteBright:
              'colorSchemes.dark_dimmed.colors.checks.ansi.whiteBright',
            gray: 'colorSchemes.dark_dimmed.colors.checks.ansi.gray',
            red: 'colorSchemes.dark_dimmed.colors.checks.ansi.red',
            redBright: 'colorSchemes.dark_dimmed.colors.checks.ansi.redBright',
            green: 'colorSchemes.dark_dimmed.colors.checks.ansi.green',
            greenBright:
              'colorSchemes.dark_dimmed.colors.checks.ansi.greenBright',
            yellow: 'colorSchemes.dark_dimmed.colors.checks.ansi.yellow',
            yellowBright:
              'colorSchemes.dark_dimmed.colors.checks.ansi.yellowBright',
            blue: 'colorSchemes.dark_dimmed.colors.checks.ansi.blue',
            blueBright:
              'colorSchemes.dark_dimmed.colors.checks.ansi.blueBright',
            magenta: 'colorSchemes.dark_dimmed.colors.checks.ansi.magenta',
            magentaBright:
              'colorSchemes.dark_dimmed.colors.checks.ansi.magentaBright',
            cyan: 'colorSchemes.dark_dimmed.colors.checks.ansi.cyan',
            cyanBright:
              'colorSchemes.dark_dimmed.colors.checks.ansi.cyanBright',
          },
        },
        project: {
          headerBg: 'colorSchemes.dark_dimmed.colors.project.headerBg',
          sidebarBg: 'colorSchemes.dark_dimmed.colors.project.sidebarBg',
          gradientIn: 'colorSchemes.dark_dimmed.colors.project.gradientIn',
          gradientOut: 'colorSchemes.dark_dimmed.colors.project.gradientOut',
        },
        mktg: {
          btn: {
            bg: 'colorSchemes.dark_dimmed.colors.mktg.btn.bg',
          },
        },
        control: {
          borderColor: {
            emphasis:
              'colorSchemes.dark_dimmed.colors.control.borderColor.emphasis',
          },
        },
        avatar: {
          bg: 'colorSchemes.dark_dimmed.colors.avatar.bg',
          border: 'colorSchemes.dark_dimmed.colors.avatar.border',
          stackFade: 'colorSchemes.dark_dimmed.colors.avatar.stackFade',
          stackFadeMore: 'colorSchemes.dark_dimmed.colors.avatar.stackFadeMore',
        },
        topicTag: {
          border: 'colorSchemes.dark_dimmed.colors.topicTag.border',
        },
        counter: {
          border: 'colorSchemes.dark_dimmed.colors.counter.border',
        },
        selectMenu: {
          backdropBorder:
            'colorSchemes.dark_dimmed.colors.selectMenu.backdropBorder',
          tapHighlight:
            'colorSchemes.dark_dimmed.colors.selectMenu.tapHighlight',
          tapFocusBg: 'colorSchemes.dark_dimmed.colors.selectMenu.tapFocusBg',
        },
        header: {
          text: 'colorSchemes.dark_dimmed.colors.header.text',
          bg: 'colorSchemes.dark_dimmed.colors.header.bg',
          divider: 'colorSchemes.dark_dimmed.colors.header.divider',
          logo: 'colorSchemes.dark_dimmed.colors.header.logo',
        },
        headerSearch: {
          bg: 'colorSchemes.dark_dimmed.colors.headerSearch.bg',
          border: 'colorSchemes.dark_dimmed.colors.headerSearch.border',
        },
        sidenav: {
          selectedBg: 'colorSchemes.dark_dimmed.colors.sidenav.selectedBg',
        },
        menu: {
          bgActive: 'colorSchemes.dark_dimmed.colors.menu.bgActive',
        },
        input: {
          disabledBg: 'colorSchemes.dark_dimmed.colors.input.disabledBg',
        },
        timeline: {
          badgeBg: 'colorSchemes.dark_dimmed.colors.timeline.badgeBg',
        },
        ansi: {
          black: 'colorSchemes.dark_dimmed.colors.ansi.black',
          blackBright: 'colorSchemes.dark_dimmed.colors.ansi.blackBright',
          white: 'colorSchemes.dark_dimmed.colors.ansi.white',
          whiteBright: 'colorSchemes.dark_dimmed.colors.ansi.whiteBright',
          gray: 'colorSchemes.dark_dimmed.colors.ansi.gray',
          red: 'colorSchemes.dark_dimmed.colors.ansi.red',
          redBright: 'colorSchemes.dark_dimmed.colors.ansi.redBright',
          green: 'colorSchemes.dark_dimmed.colors.ansi.green',
          greenBright: 'colorSchemes.dark_dimmed.colors.ansi.greenBright',
          yellow: 'colorSchemes.dark_dimmed.colors.ansi.yellow',
          yellowBright: 'colorSchemes.dark_dimmed.colors.ansi.yellowBright',
          blue: 'colorSchemes.dark_dimmed.colors.ansi.blue',
          blueBright: 'colorSchemes.dark_dimmed.colors.ansi.blueBright',
          magenta: 'colorSchemes.dark_dimmed.colors.ansi.magenta',
          magentaBright: 'colorSchemes.dark_dimmed.colors.ansi.magentaBright',
          cyan: 'colorSchemes.dark_dimmed.colors.ansi.cyan',
          cyanBright: 'colorSchemes.dark_dimmed.colors.ansi.cyanBright',
        },
        btn: {
          text: 'colorSchemes.dark_dimmed.colors.btn.text',
          bg: 'colorSchemes.dark_dimmed.colors.btn.bg',
          border: 'colorSchemes.dark_dimmed.colors.btn.border',
          hoverBg: 'colorSchemes.dark_dimmed.colors.btn.hoverBg',
          hoverBorder: 'colorSchemes.dark_dimmed.colors.btn.hoverBorder',
          activeBg: 'colorSchemes.dark_dimmed.colors.btn.activeBg',
          activeBorder: 'colorSchemes.dark_dimmed.colors.btn.activeBorder',
          selectedBg: 'colorSchemes.dark_dimmed.colors.btn.selectedBg',
          counterBg: 'colorSchemes.dark_dimmed.colors.btn.counterBg',
          primary: {
            text: 'colorSchemes.dark_dimmed.colors.btn.primary.text',
            bg: 'colorSchemes.dark_dimmed.colors.btn.primary.bg',
            border: 'colorSchemes.dark_dimmed.colors.btn.primary.border',
            hoverBg: 'colorSchemes.dark_dimmed.colors.btn.primary.hoverBg',
            hoverBorder:
              'colorSchemes.dark_dimmed.colors.btn.primary.hoverBorder',
            selectedBg:
              'colorSchemes.dark_dimmed.colors.btn.primary.selectedBg',
            disabledText:
              'colorSchemes.dark_dimmed.colors.btn.primary.disabledText',
            disabledBg:
              'colorSchemes.dark_dimmed.colors.btn.primary.disabledBg',
            disabledBorder:
              'colorSchemes.dark_dimmed.colors.btn.primary.disabledBorder',
            icon: 'colorSchemes.dark_dimmed.colors.btn.primary.icon',
            counterBg: 'colorSchemes.dark_dimmed.colors.btn.primary.counterBg',
          },
          outline: {
            text: 'colorSchemes.dark_dimmed.colors.btn.outline.text',
            hoverText: 'colorSchemes.dark_dimmed.colors.btn.outline.hoverText',
            hoverBg: 'colorSchemes.dark_dimmed.colors.btn.outline.hoverBg',
            hoverBorder:
              'colorSchemes.dark_dimmed.colors.btn.outline.hoverBorder',
            hoverCounterBg:
              'colorSchemes.dark_dimmed.colors.btn.outline.hoverCounterBg',
            selectedText:
              'colorSchemes.dark_dimmed.colors.btn.outline.selectedText',
            selectedBg:
              'colorSchemes.dark_dimmed.colors.btn.outline.selectedBg',
            selectedBorder:
              'colorSchemes.dark_dimmed.colors.btn.outline.selectedBorder',
            disabledText:
              'colorSchemes.dark_dimmed.colors.btn.outline.disabledText',
            disabledBg:
              'colorSchemes.dark_dimmed.colors.btn.outline.disabledBg',
            disabledCounterBg:
              'colorSchemes.dark_dimmed.colors.btn.outline.disabledCounterBg',
            counterBg: 'colorSchemes.dark_dimmed.colors.btn.outline.counterBg',
          },
          danger: {
            text: 'colorSchemes.dark_dimmed.colors.btn.danger.text',
            hoverText: 'colorSchemes.dark_dimmed.colors.btn.danger.hoverText',
            hoverBg: 'colorSchemes.dark_dimmed.colors.btn.danger.hoverBg',
            hoverBorder:
              'colorSchemes.dark_dimmed.colors.btn.danger.hoverBorder',
            hoverIcon: 'colorSchemes.dark_dimmed.colors.btn.danger.hoverIcon',
            hoverCounterBg:
              'colorSchemes.dark_dimmed.colors.btn.danger.hoverCounterBg',
            selectedText:
              'colorSchemes.dark_dimmed.colors.btn.danger.selectedText',
            selectedBg: 'colorSchemes.dark_dimmed.colors.btn.danger.selectedBg',
            selectedBorder:
              'colorSchemes.dark_dimmed.colors.btn.danger.selectedBorder',
            disabledText:
              'colorSchemes.dark_dimmed.colors.btn.danger.disabledText',
            disabledBg: 'colorSchemes.dark_dimmed.colors.btn.danger.disabledBg',
            disabledCounterBg:
              'colorSchemes.dark_dimmed.colors.btn.danger.disabledCounterBg',
            counterBg: 'colorSchemes.dark_dimmed.colors.btn.danger.counterBg',
            icon: 'colorSchemes.dark_dimmed.colors.btn.danger.icon',
          },
        },
        underlinenav: {
          icon: 'colorSchemes.dark_dimmed.colors.underlinenav.icon',
          borderHover:
            'colorSchemes.dark_dimmed.colors.underlinenav.borderHover',
        },
        actionListItem: {
          inlineDivider:
            'colorSchemes.dark_dimmed.colors.actionListItem.inlineDivider',
          default: {
            hoverBg:
              'colorSchemes.dark_dimmed.colors.actionListItem.default.hoverBg',
            hoverBorder:
              'colorSchemes.dark_dimmed.colors.actionListItem.default.hoverBorder',
            activeBg:
              'colorSchemes.dark_dimmed.colors.actionListItem.default.activeBg',
            activeBorder:
              'colorSchemes.dark_dimmed.colors.actionListItem.default.activeBorder',
            selectedBg:
              'colorSchemes.dark_dimmed.colors.actionListItem.default.selectedBg',
          },
          danger: {
            hoverBg:
              'colorSchemes.dark_dimmed.colors.actionListItem.danger.hoverBg',
            activeBg:
              'colorSchemes.dark_dimmed.colors.actionListItem.danger.activeBg',
            hoverText:
              'colorSchemes.dark_dimmed.colors.actionListItem.danger.hoverText',
          },
        },
        switchTrack: {
          bg: 'colorSchemes.dark_dimmed.colors.switchTrack.bg',
          hoverBg: 'colorSchemes.dark_dimmed.colors.switchTrack.hoverBg',
          activeBg: 'colorSchemes.dark_dimmed.colors.switchTrack.activeBg',
          disabledBg: 'colorSchemes.dark_dimmed.colors.switchTrack.disabledBg',
          fg: 'colorSchemes.dark_dimmed.colors.switchTrack.fg',
          disabledFg: 'colorSchemes.dark_dimmed.colors.switchTrack.disabledFg',
          border: 'colorSchemes.dark_dimmed.colors.switchTrack.border',
          checked: {
            bg: 'colorSchemes.dark_dimmed.colors.switchTrack.checked.bg',
            hoverBg:
              'colorSchemes.dark_dimmed.colors.switchTrack.checked.hoverBg',
            activeBg:
              'colorSchemes.dark_dimmed.colors.switchTrack.checked.activeBg',
            fg: 'colorSchemes.dark_dimmed.colors.switchTrack.checked.fg',
            disabledFg:
              'colorSchemes.dark_dimmed.colors.switchTrack.checked.disabledFg',
            border:
              'colorSchemes.dark_dimmed.colors.switchTrack.checked.border',
          },
        },
        switchKnob: {
          bg: 'colorSchemes.dark_dimmed.colors.switchKnob.bg',
          border: 'colorSchemes.dark_dimmed.colors.switchKnob.border',
          disabledBg: 'colorSchemes.dark_dimmed.colors.switchKnob.disabledBg',
          checked: {
            bg: 'colorSchemes.dark_dimmed.colors.switchKnob.checked.bg',
            disabledBg:
              'colorSchemes.dark_dimmed.colors.switchKnob.checked.disabledBg',
            border: 'colorSchemes.dark_dimmed.colors.switchKnob.checked.border',
          },
        },
        segmentedControl: {
          bg: 'colorSchemes.dark_dimmed.colors.segmentedControl.bg',
          button: {
            bg: 'colorSchemes.dark_dimmed.colors.segmentedControl.button.bg',
            hover: {
              bg: 'colorSchemes.dark_dimmed.colors.segmentedControl.button.hover.bg',
            },
            active: {
              bg: 'colorSchemes.dark_dimmed.colors.segmentedControl.button.active.bg',
            },
            selected: {
              border:
                'colorSchemes.dark_dimmed.colors.segmentedControl.button.selected.border',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg:
              'colorSchemes.dark_dimmed.colors.treeViewItem.chevron.hoverBg',
          },
          directory: {
            fill: 'colorSchemes.dark_dimmed.colors.treeViewItem.directory.fill',
          },
        },
        fg: {
          default: 'colorSchemes.dark_dimmed.colors.fg.default',
          muted: 'colorSchemes.dark_dimmed.colors.fg.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.fg.subtle',
          onEmphasis: 'colorSchemes.dark_dimmed.colors.fg.onEmphasis',
        },
        canvas: {
          default: 'colorSchemes.dark_dimmed.colors.canvas.default',
          overlay: 'colorSchemes.dark_dimmed.colors.canvas.overlay',
          inset: 'colorSchemes.dark_dimmed.colors.canvas.inset',
          subtle: 'colorSchemes.dark_dimmed.colors.canvas.subtle',
        },
        border: {
          default: 'colorSchemes.dark_dimmed.colors.border.default',
          muted: 'colorSchemes.dark_dimmed.colors.border.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.border.subtle',
        },
        neutral: {
          emphasisPlus: 'colorSchemes.dark_dimmed.colors.neutral.emphasisPlus',
          emphasis: 'colorSchemes.dark_dimmed.colors.neutral.emphasis',
          muted: 'colorSchemes.dark_dimmed.colors.neutral.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.neutral.subtle',
        },
        accent: {
          fg: 'colorSchemes.dark_dimmed.colors.accent.fg',
          emphasis: 'colorSchemes.dark_dimmed.colors.accent.emphasis',
          muted: 'colorSchemes.dark_dimmed.colors.accent.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.accent.subtle',
        },
        success: {
          fg: 'colorSchemes.dark_dimmed.colors.success.fg',
          emphasis: 'colorSchemes.dark_dimmed.colors.success.emphasis',
          muted: 'colorSchemes.dark_dimmed.colors.success.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.success.subtle',
        },
        attention: {
          fg: 'colorSchemes.dark_dimmed.colors.attention.fg',
          emphasis: 'colorSchemes.dark_dimmed.colors.attention.emphasis',
          muted: 'colorSchemes.dark_dimmed.colors.attention.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.attention.subtle',
        },
        severe: {
          fg: 'colorSchemes.dark_dimmed.colors.severe.fg',
          emphasis: 'colorSchemes.dark_dimmed.colors.severe.emphasis',
          muted: 'colorSchemes.dark_dimmed.colors.severe.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.severe.subtle',
        },
        danger: {
          fg: 'colorSchemes.dark_dimmed.colors.danger.fg',
          emphasis: 'colorSchemes.dark_dimmed.colors.danger.emphasis',
          muted: 'colorSchemes.dark_dimmed.colors.danger.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.danger.subtle',
        },
        open: {
          fg: 'colorSchemes.dark_dimmed.colors.open.fg',
          emphasis: 'colorSchemes.dark_dimmed.colors.open.emphasis',
          muted: 'colorSchemes.dark_dimmed.colors.open.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.open.subtle',
        },
        closed: {
          fg: 'colorSchemes.dark_dimmed.colors.closed.fg',
          emphasis: 'colorSchemes.dark_dimmed.colors.closed.emphasis',
          muted: 'colorSchemes.dark_dimmed.colors.closed.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.closed.subtle',
        },
        done: {
          fg: 'colorSchemes.dark_dimmed.colors.done.fg',
          emphasis: 'colorSchemes.dark_dimmed.colors.done.emphasis',
          muted: 'colorSchemes.dark_dimmed.colors.done.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.done.subtle',
        },
        sponsors: {
          fg: 'colorSchemes.dark_dimmed.colors.sponsors.fg',
          emphasis: 'colorSchemes.dark_dimmed.colors.sponsors.emphasis',
          muted: 'colorSchemes.dark_dimmed.colors.sponsors.muted',
          subtle: 'colorSchemes.dark_dimmed.colors.sponsors.subtle',
        },
        primer: {
          fg: {
            disabled: 'colorSchemes.dark_dimmed.colors.primer.fg.disabled',
          },
          canvas: {
            backdrop: 'colorSchemes.dark_dimmed.colors.primer.canvas.backdrop',
            sticky: 'colorSchemes.dark_dimmed.colors.primer.canvas.sticky',
          },
          border: {
            active: 'colorSchemes.dark_dimmed.colors.primer.border.active',
            contrast: 'colorSchemes.dark_dimmed.colors.primer.border.contrast',
          },
        },
      },
      shadows: {
        checks: {
          inputShadow: 'colorSchemes.dark_dimmed.shadows.checks.inputShadow',
        },
        mktg: {
          btn: {
            shadow: {
              outline:
                'colorSchemes.dark_dimmed.shadows.mktg.btn.shadow.outline',
              focus: 'colorSchemes.dark_dimmed.shadows.mktg.btn.shadow.focus',
              hover: 'colorSchemes.dark_dimmed.shadows.mktg.btn.shadow.hover',
              hoverMuted:
                'colorSchemes.dark_dimmed.shadows.mktg.btn.shadow.hoverMuted',
            },
          },
        },
        avatar: {
          childShadow: 'colorSchemes.dark_dimmed.shadows.avatar.childShadow',
        },
        overlay: {
          shadow: 'colorSchemes.dark_dimmed.shadows.overlay.shadow',
        },
        btn: {
          shadow: 'colorSchemes.dark_dimmed.shadows.btn.shadow',
          insetShadow: 'colorSchemes.dark_dimmed.shadows.btn.insetShadow',
          primary: {
            shadow: 'colorSchemes.dark_dimmed.shadows.btn.primary.shadow',
            insetShadow:
              'colorSchemes.dark_dimmed.shadows.btn.primary.insetShadow',
            selectedShadow:
              'colorSchemes.dark_dimmed.shadows.btn.primary.selectedShadow',
          },
          outline: {
            hoverShadow:
              'colorSchemes.dark_dimmed.shadows.btn.outline.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.dark_dimmed.shadows.btn.outline.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.dark_dimmed.shadows.btn.outline.selectedShadow',
          },
          danger: {
            hoverShadow:
              'colorSchemes.dark_dimmed.shadows.btn.danger.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.dark_dimmed.shadows.btn.danger.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.dark_dimmed.shadows.btn.danger.selectedShadow',
          },
        },
        shadow: {
          small: 'colorSchemes.dark_dimmed.shadows.shadow.small',
          medium: 'colorSchemes.dark_dimmed.shadows.shadow.medium',
          large: 'colorSchemes.dark_dimmed.shadows.shadow.large',
          extraLarge: 'colorSchemes.dark_dimmed.shadows.shadow.extraLarge',
        },
        primer: {
          shadow: {
            highlight:
              'colorSchemes.dark_dimmed.shadows.primer.shadow.highlight',
            inset: 'colorSchemes.dark_dimmed.shadows.primer.shadow.inset',
          },
        },
      },
    },
    dark_high_contrast: {
      colors: {
        canvasDefaultTransparent:
          'colorSchemes.dark_high_contrast.colors.canvasDefaultTransparent',
        pageHeaderBg: 'colorSchemes.dark_high_contrast.colors.pageHeaderBg',
        marketingIcon: {
          primary:
            'colorSchemes.dark_high_contrast.colors.marketingIcon.primary',
          secondary:
            'colorSchemes.dark_high_contrast.colors.marketingIcon.secondary',
        },
        diffBlob: {
          addition: {
            numText:
              'colorSchemes.dark_high_contrast.colors.diffBlob.addition.numText',
            fg: 'colorSchemes.dark_high_contrast.colors.diffBlob.addition.fg',
            numBg:
              'colorSchemes.dark_high_contrast.colors.diffBlob.addition.numBg',
            lineBg:
              'colorSchemes.dark_high_contrast.colors.diffBlob.addition.lineBg',
            wordBg:
              'colorSchemes.dark_high_contrast.colors.diffBlob.addition.wordBg',
          },
          deletion: {
            numText:
              'colorSchemes.dark_high_contrast.colors.diffBlob.deletion.numText',
            fg: 'colorSchemes.dark_high_contrast.colors.diffBlob.deletion.fg',
            numBg:
              'colorSchemes.dark_high_contrast.colors.diffBlob.deletion.numBg',
            lineBg:
              'colorSchemes.dark_high_contrast.colors.diffBlob.deletion.lineBg',
            wordBg:
              'colorSchemes.dark_high_contrast.colors.diffBlob.deletion.wordBg',
          },
          hunk: {
            numBg: 'colorSchemes.dark_high_contrast.colors.diffBlob.hunk.numBg',
          },
          expander: {
            icon: 'colorSchemes.dark_high_contrast.colors.diffBlob.expander.icon',
          },
        },
        diffstat: {
          deletionBorder:
            'colorSchemes.dark_high_contrast.colors.diffstat.deletionBorder',
          additionBorder:
            'colorSchemes.dark_high_contrast.colors.diffstat.additionBorder',
          additionBg:
            'colorSchemes.dark_high_contrast.colors.diffstat.additionBg',
        },
        searchKeyword: {
          hl: 'colorSchemes.dark_high_contrast.colors.searchKeyword.hl',
        },
        prettylights: {
          syntax: {
            comment:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.comment',
            constant:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.constant',
            entity:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.entity',
            storageModifierImport:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.storageModifierImport',
            entityTag:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.entityTag',
            keyword:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.keyword',
            string:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.string',
            variable:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.variable',
            brackethighlighterUnmatched:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.brackethighlighterUnmatched',
            invalidIllegalText:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.invalidIllegalText',
            invalidIllegalBg:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.invalidIllegalBg',
            carriageReturnText:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.carriageReturnText',
            carriageReturnBg:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.carriageReturnBg',
            stringRegexp:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.stringRegexp',
            markupList:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupList',
            markupHeading:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupHeading',
            markupItalic:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupItalic',
            markupBold:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupBold',
            markupDeletedText:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupDeletedText',
            markupDeletedBg:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupDeletedBg',
            markupInsertedText:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupInsertedText',
            markupInsertedBg:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupInsertedBg',
            markupChangedText:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupChangedText',
            markupChangedBg:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupChangedBg',
            markupIgnoredText:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupIgnoredText',
            markupIgnoredBg:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.markupIgnoredBg',
            metaDiffRange:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.metaDiffRange',
            brackethighlighterAngle:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.brackethighlighterAngle',
            sublimelinterGutterMark:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.sublimelinterGutterMark',
            constantOtherReferenceLink:
              'colorSchemes.dark_high_contrast.colors.prettylights.syntax.constantOtherReferenceLink',
          },
        },
        codemirror: {
          text: 'colorSchemes.dark_high_contrast.colors.codemirror.text',
          bg: 'colorSchemes.dark_high_contrast.colors.codemirror.bg',
          guttersBg:
            'colorSchemes.dark_high_contrast.colors.codemirror.guttersBg',
          guttermarkerText:
            'colorSchemes.dark_high_contrast.colors.codemirror.guttermarkerText',
          guttermarkerSubtleText:
            'colorSchemes.dark_high_contrast.colors.codemirror.guttermarkerSubtleText',
          linenumberText:
            'colorSchemes.dark_high_contrast.colors.codemirror.linenumberText',
          cursor: 'colorSchemes.dark_high_contrast.colors.codemirror.cursor',
          selectionBg:
            'colorSchemes.dark_high_contrast.colors.codemirror.selectionBg',
          activelineBg:
            'colorSchemes.dark_high_contrast.colors.codemirror.activelineBg',
          matchingbracketText:
            'colorSchemes.dark_high_contrast.colors.codemirror.matchingbracketText',
          linesBg: 'colorSchemes.dark_high_contrast.colors.codemirror.linesBg',
          syntax: {
            comment:
              'colorSchemes.dark_high_contrast.colors.codemirror.syntax.comment',
            constant:
              'colorSchemes.dark_high_contrast.colors.codemirror.syntax.constant',
            entity:
              'colorSchemes.dark_high_contrast.colors.codemirror.syntax.entity',
            keyword:
              'colorSchemes.dark_high_contrast.colors.codemirror.syntax.keyword',
            storage:
              'colorSchemes.dark_high_contrast.colors.codemirror.syntax.storage',
            string:
              'colorSchemes.dark_high_contrast.colors.codemirror.syntax.string',
            support:
              'colorSchemes.dark_high_contrast.colors.codemirror.syntax.support',
            variable:
              'colorSchemes.dark_high_contrast.colors.codemirror.syntax.variable',
          },
        },
        checks: {
          bg: 'colorSchemes.dark_high_contrast.colors.checks.bg',
          textPrimary:
            'colorSchemes.dark_high_contrast.colors.checks.textPrimary',
          textSecondary:
            'colorSchemes.dark_high_contrast.colors.checks.textSecondary',
          textLink: 'colorSchemes.dark_high_contrast.colors.checks.textLink',
          btnIcon: 'colorSchemes.dark_high_contrast.colors.checks.btnIcon',
          btnHoverIcon:
            'colorSchemes.dark_high_contrast.colors.checks.btnHoverIcon',
          btnHoverBg:
            'colorSchemes.dark_high_contrast.colors.checks.btnHoverBg',
          inputText: 'colorSchemes.dark_high_contrast.colors.checks.inputText',
          inputPlaceholderText:
            'colorSchemes.dark_high_contrast.colors.checks.inputPlaceholderText',
          inputFocusText:
            'colorSchemes.dark_high_contrast.colors.checks.inputFocusText',
          inputBg: 'colorSchemes.dark_high_contrast.colors.checks.inputBg',
          donutError:
            'colorSchemes.dark_high_contrast.colors.checks.donutError',
          donutPending:
            'colorSchemes.dark_high_contrast.colors.checks.donutPending',
          donutSuccess:
            'colorSchemes.dark_high_contrast.colors.checks.donutSuccess',
          donutNeutral:
            'colorSchemes.dark_high_contrast.colors.checks.donutNeutral',
          dropdownText:
            'colorSchemes.dark_high_contrast.colors.checks.dropdownText',
          dropdownBg:
            'colorSchemes.dark_high_contrast.colors.checks.dropdownBg',
          dropdownBorder:
            'colorSchemes.dark_high_contrast.colors.checks.dropdownBorder',
          dropdownShadow:
            'colorSchemes.dark_high_contrast.colors.checks.dropdownShadow',
          dropdownHoverText:
            'colorSchemes.dark_high_contrast.colors.checks.dropdownHoverText',
          dropdownHoverBg:
            'colorSchemes.dark_high_contrast.colors.checks.dropdownHoverBg',
          dropdownBtnHoverText:
            'colorSchemes.dark_high_contrast.colors.checks.dropdownBtnHoverText',
          dropdownBtnHoverBg:
            'colorSchemes.dark_high_contrast.colors.checks.dropdownBtnHoverBg',
          scrollbarThumbBg:
            'colorSchemes.dark_high_contrast.colors.checks.scrollbarThumbBg',
          headerLabelText:
            'colorSchemes.dark_high_contrast.colors.checks.headerLabelText',
          headerLabelOpenText:
            'colorSchemes.dark_high_contrast.colors.checks.headerLabelOpenText',
          headerBorder:
            'colorSchemes.dark_high_contrast.colors.checks.headerBorder',
          headerIcon:
            'colorSchemes.dark_high_contrast.colors.checks.headerIcon',
          lineText: 'colorSchemes.dark_high_contrast.colors.checks.lineText',
          lineNumText:
            'colorSchemes.dark_high_contrast.colors.checks.lineNumText',
          lineTimestampText:
            'colorSchemes.dark_high_contrast.colors.checks.lineTimestampText',
          lineHoverBg:
            'colorSchemes.dark_high_contrast.colors.checks.lineHoverBg',
          lineSelectedBg:
            'colorSchemes.dark_high_contrast.colors.checks.lineSelectedBg',
          lineSelectedNumText:
            'colorSchemes.dark_high_contrast.colors.checks.lineSelectedNumText',
          lineDtFmText:
            'colorSchemes.dark_high_contrast.colors.checks.lineDtFmText',
          lineDtFmBg:
            'colorSchemes.dark_high_contrast.colors.checks.lineDtFmBg',
          gateBg: 'colorSchemes.dark_high_contrast.colors.checks.gateBg',
          gateText: 'colorSchemes.dark_high_contrast.colors.checks.gateText',
          gateWaitingText:
            'colorSchemes.dark_high_contrast.colors.checks.gateWaitingText',
          stepHeaderOpenBg:
            'colorSchemes.dark_high_contrast.colors.checks.stepHeaderOpenBg',
          stepErrorText:
            'colorSchemes.dark_high_contrast.colors.checks.stepErrorText',
          stepWarningText:
            'colorSchemes.dark_high_contrast.colors.checks.stepWarningText',
          loglineText:
            'colorSchemes.dark_high_contrast.colors.checks.loglineText',
          loglineNumText:
            'colorSchemes.dark_high_contrast.colors.checks.loglineNumText',
          loglineDebugText:
            'colorSchemes.dark_high_contrast.colors.checks.loglineDebugText',
          loglineErrorText:
            'colorSchemes.dark_high_contrast.colors.checks.loglineErrorText',
          loglineErrorNumText:
            'colorSchemes.dark_high_contrast.colors.checks.loglineErrorNumText',
          loglineErrorBg:
            'colorSchemes.dark_high_contrast.colors.checks.loglineErrorBg',
          loglineWarningText:
            'colorSchemes.dark_high_contrast.colors.checks.loglineWarningText',
          loglineWarningNumText:
            'colorSchemes.dark_high_contrast.colors.checks.loglineWarningNumText',
          loglineWarningBg:
            'colorSchemes.dark_high_contrast.colors.checks.loglineWarningBg',
          loglineCommandText:
            'colorSchemes.dark_high_contrast.colors.checks.loglineCommandText',
          loglineSectionText:
            'colorSchemes.dark_high_contrast.colors.checks.loglineSectionText',
          ansi: {
            black: 'colorSchemes.dark_high_contrast.colors.checks.ansi.black',
            blackBright:
              'colorSchemes.dark_high_contrast.colors.checks.ansi.blackBright',
            white: 'colorSchemes.dark_high_contrast.colors.checks.ansi.white',
            whiteBright:
              'colorSchemes.dark_high_contrast.colors.checks.ansi.whiteBright',
            gray: 'colorSchemes.dark_high_contrast.colors.checks.ansi.gray',
            red: 'colorSchemes.dark_high_contrast.colors.checks.ansi.red',
            redBright:
              'colorSchemes.dark_high_contrast.colors.checks.ansi.redBright',
            green: 'colorSchemes.dark_high_contrast.colors.checks.ansi.green',
            greenBright:
              'colorSchemes.dark_high_contrast.colors.checks.ansi.greenBright',
            yellow: 'colorSchemes.dark_high_contrast.colors.checks.ansi.yellow',
            yellowBright:
              'colorSchemes.dark_high_contrast.colors.checks.ansi.yellowBright',
            blue: 'colorSchemes.dark_high_contrast.colors.checks.ansi.blue',
            blueBright:
              'colorSchemes.dark_high_contrast.colors.checks.ansi.blueBright',
            magenta:
              'colorSchemes.dark_high_contrast.colors.checks.ansi.magenta',
            magentaBright:
              'colorSchemes.dark_high_contrast.colors.checks.ansi.magentaBright',
            cyan: 'colorSchemes.dark_high_contrast.colors.checks.ansi.cyan',
            cyanBright:
              'colorSchemes.dark_high_contrast.colors.checks.ansi.cyanBright',
          },
        },
        project: {
          headerBg: 'colorSchemes.dark_high_contrast.colors.project.headerBg',
          sidebarBg: 'colorSchemes.dark_high_contrast.colors.project.sidebarBg',
          gradientIn:
            'colorSchemes.dark_high_contrast.colors.project.gradientIn',
          gradientOut:
            'colorSchemes.dark_high_contrast.colors.project.gradientOut',
        },
        mktg: {
          btn: {
            bg: 'colorSchemes.dark_high_contrast.colors.mktg.btn.bg',
          },
        },
        control: {
          borderColor: {
            emphasis:
              'colorSchemes.dark_high_contrast.colors.control.borderColor.emphasis',
          },
        },
        avatar: {
          bg: 'colorSchemes.dark_high_contrast.colors.avatar.bg',
          border: 'colorSchemes.dark_high_contrast.colors.avatar.border',
          stackFade: 'colorSchemes.dark_high_contrast.colors.avatar.stackFade',
          stackFadeMore:
            'colorSchemes.dark_high_contrast.colors.avatar.stackFadeMore',
        },
        topicTag: {
          border: 'colorSchemes.dark_high_contrast.colors.topicTag.border',
        },
        counter: {
          border: 'colorSchemes.dark_high_contrast.colors.counter.border',
        },
        selectMenu: {
          backdropBorder:
            'colorSchemes.dark_high_contrast.colors.selectMenu.backdropBorder',
          tapHighlight:
            'colorSchemes.dark_high_contrast.colors.selectMenu.tapHighlight',
          tapFocusBg:
            'colorSchemes.dark_high_contrast.colors.selectMenu.tapFocusBg',
        },
        header: {
          text: 'colorSchemes.dark_high_contrast.colors.header.text',
          bg: 'colorSchemes.dark_high_contrast.colors.header.bg',
          divider: 'colorSchemes.dark_high_contrast.colors.header.divider',
          logo: 'colorSchemes.dark_high_contrast.colors.header.logo',
        },
        headerSearch: {
          bg: 'colorSchemes.dark_high_contrast.colors.headerSearch.bg',
          border: 'colorSchemes.dark_high_contrast.colors.headerSearch.border',
        },
        sidenav: {
          selectedBg:
            'colorSchemes.dark_high_contrast.colors.sidenav.selectedBg',
        },
        menu: {
          bgActive: 'colorSchemes.dark_high_contrast.colors.menu.bgActive',
        },
        input: {
          disabledBg: 'colorSchemes.dark_high_contrast.colors.input.disabledBg',
        },
        timeline: {
          badgeBg: 'colorSchemes.dark_high_contrast.colors.timeline.badgeBg',
        },
        ansi: {
          black: 'colorSchemes.dark_high_contrast.colors.ansi.black',
          blackBright:
            'colorSchemes.dark_high_contrast.colors.ansi.blackBright',
          white: 'colorSchemes.dark_high_contrast.colors.ansi.white',
          whiteBright:
            'colorSchemes.dark_high_contrast.colors.ansi.whiteBright',
          gray: 'colorSchemes.dark_high_contrast.colors.ansi.gray',
          red: 'colorSchemes.dark_high_contrast.colors.ansi.red',
          redBright: 'colorSchemes.dark_high_contrast.colors.ansi.redBright',
          green: 'colorSchemes.dark_high_contrast.colors.ansi.green',
          greenBright:
            'colorSchemes.dark_high_contrast.colors.ansi.greenBright',
          yellow: 'colorSchemes.dark_high_contrast.colors.ansi.yellow',
          yellowBright:
            'colorSchemes.dark_high_contrast.colors.ansi.yellowBright',
          blue: 'colorSchemes.dark_high_contrast.colors.ansi.blue',
          blueBright: 'colorSchemes.dark_high_contrast.colors.ansi.blueBright',
          magenta: 'colorSchemes.dark_high_contrast.colors.ansi.magenta',
          magentaBright:
            'colorSchemes.dark_high_contrast.colors.ansi.magentaBright',
          cyan: 'colorSchemes.dark_high_contrast.colors.ansi.cyan',
          cyanBright: 'colorSchemes.dark_high_contrast.colors.ansi.cyanBright',
        },
        btn: {
          text: 'colorSchemes.dark_high_contrast.colors.btn.text',
          bg: 'colorSchemes.dark_high_contrast.colors.btn.bg',
          border: 'colorSchemes.dark_high_contrast.colors.btn.border',
          hoverBg: 'colorSchemes.dark_high_contrast.colors.btn.hoverBg',
          hoverBorder: 'colorSchemes.dark_high_contrast.colors.btn.hoverBorder',
          activeBg: 'colorSchemes.dark_high_contrast.colors.btn.activeBg',
          activeBorder:
            'colorSchemes.dark_high_contrast.colors.btn.activeBorder',
          selectedBg: 'colorSchemes.dark_high_contrast.colors.btn.selectedBg',
          counterBg: 'colorSchemes.dark_high_contrast.colors.btn.counterBg',
          primary: {
            text: 'colorSchemes.dark_high_contrast.colors.btn.primary.text',
            bg: 'colorSchemes.dark_high_contrast.colors.btn.primary.bg',
            border: 'colorSchemes.dark_high_contrast.colors.btn.primary.border',
            hoverBg:
              'colorSchemes.dark_high_contrast.colors.btn.primary.hoverBg',
            hoverBorder:
              'colorSchemes.dark_high_contrast.colors.btn.primary.hoverBorder',
            selectedBg:
              'colorSchemes.dark_high_contrast.colors.btn.primary.selectedBg',
            disabledText:
              'colorSchemes.dark_high_contrast.colors.btn.primary.disabledText',
            disabledBg:
              'colorSchemes.dark_high_contrast.colors.btn.primary.disabledBg',
            disabledBorder:
              'colorSchemes.dark_high_contrast.colors.btn.primary.disabledBorder',
            icon: 'colorSchemes.dark_high_contrast.colors.btn.primary.icon',
            counterBg:
              'colorSchemes.dark_high_contrast.colors.btn.primary.counterBg',
          },
          outline: {
            text: 'colorSchemes.dark_high_contrast.colors.btn.outline.text',
            hoverText:
              'colorSchemes.dark_high_contrast.colors.btn.outline.hoverText',
            hoverBg:
              'colorSchemes.dark_high_contrast.colors.btn.outline.hoverBg',
            hoverBorder:
              'colorSchemes.dark_high_contrast.colors.btn.outline.hoverBorder',
            hoverCounterBg:
              'colorSchemes.dark_high_contrast.colors.btn.outline.hoverCounterBg',
            selectedText:
              'colorSchemes.dark_high_contrast.colors.btn.outline.selectedText',
            selectedBg:
              'colorSchemes.dark_high_contrast.colors.btn.outline.selectedBg',
            selectedBorder:
              'colorSchemes.dark_high_contrast.colors.btn.outline.selectedBorder',
            disabledText:
              'colorSchemes.dark_high_contrast.colors.btn.outline.disabledText',
            disabledBg:
              'colorSchemes.dark_high_contrast.colors.btn.outline.disabledBg',
            disabledCounterBg:
              'colorSchemes.dark_high_contrast.colors.btn.outline.disabledCounterBg',
            counterBg:
              'colorSchemes.dark_high_contrast.colors.btn.outline.counterBg',
          },
          danger: {
            text: 'colorSchemes.dark_high_contrast.colors.btn.danger.text',
            hoverText:
              'colorSchemes.dark_high_contrast.colors.btn.danger.hoverText',
            hoverBg:
              'colorSchemes.dark_high_contrast.colors.btn.danger.hoverBg',
            hoverBorder:
              'colorSchemes.dark_high_contrast.colors.btn.danger.hoverBorder',
            hoverIcon:
              'colorSchemes.dark_high_contrast.colors.btn.danger.hoverIcon',
            hoverCounterBg:
              'colorSchemes.dark_high_contrast.colors.btn.danger.hoverCounterBg',
            selectedText:
              'colorSchemes.dark_high_contrast.colors.btn.danger.selectedText',
            selectedBg:
              'colorSchemes.dark_high_contrast.colors.btn.danger.selectedBg',
            selectedBorder:
              'colorSchemes.dark_high_contrast.colors.btn.danger.selectedBorder',
            disabledText:
              'colorSchemes.dark_high_contrast.colors.btn.danger.disabledText',
            disabledBg:
              'colorSchemes.dark_high_contrast.colors.btn.danger.disabledBg',
            disabledCounterBg:
              'colorSchemes.dark_high_contrast.colors.btn.danger.disabledCounterBg',
            counterBg:
              'colorSchemes.dark_high_contrast.colors.btn.danger.counterBg',
            icon: 'colorSchemes.dark_high_contrast.colors.btn.danger.icon',
          },
        },
        underlinenav: {
          icon: 'colorSchemes.dark_high_contrast.colors.underlinenav.icon',
          borderHover:
            'colorSchemes.dark_high_contrast.colors.underlinenav.borderHover',
        },
        actionListItem: {
          inlineDivider:
            'colorSchemes.dark_high_contrast.colors.actionListItem.inlineDivider',
          default: {
            hoverBg:
              'colorSchemes.dark_high_contrast.colors.actionListItem.default.hoverBg',
            hoverBorder:
              'colorSchemes.dark_high_contrast.colors.actionListItem.default.hoverBorder',
            activeBg:
              'colorSchemes.dark_high_contrast.colors.actionListItem.default.activeBg',
            activeBorder:
              'colorSchemes.dark_high_contrast.colors.actionListItem.default.activeBorder',
            selectedBg:
              'colorSchemes.dark_high_contrast.colors.actionListItem.default.selectedBg',
          },
          danger: {
            hoverBg:
              'colorSchemes.dark_high_contrast.colors.actionListItem.danger.hoverBg',
            activeBg:
              'colorSchemes.dark_high_contrast.colors.actionListItem.danger.activeBg',
            hoverText:
              'colorSchemes.dark_high_contrast.colors.actionListItem.danger.hoverText',
          },
        },
        switchTrack: {
          bg: 'colorSchemes.dark_high_contrast.colors.switchTrack.bg',
          hoverBg: 'colorSchemes.dark_high_contrast.colors.switchTrack.hoverBg',
          activeBg:
            'colorSchemes.dark_high_contrast.colors.switchTrack.activeBg',
          disabledBg:
            'colorSchemes.dark_high_contrast.colors.switchTrack.disabledBg',
          fg: 'colorSchemes.dark_high_contrast.colors.switchTrack.fg',
          disabledFg:
            'colorSchemes.dark_high_contrast.colors.switchTrack.disabledFg',
          border: 'colorSchemes.dark_high_contrast.colors.switchTrack.border',
          checked: {
            bg: 'colorSchemes.dark_high_contrast.colors.switchTrack.checked.bg',
            hoverBg:
              'colorSchemes.dark_high_contrast.colors.switchTrack.checked.hoverBg',
            activeBg:
              'colorSchemes.dark_high_contrast.colors.switchTrack.checked.activeBg',
            fg: 'colorSchemes.dark_high_contrast.colors.switchTrack.checked.fg',
            disabledFg:
              'colorSchemes.dark_high_contrast.colors.switchTrack.checked.disabledFg',
            border:
              'colorSchemes.dark_high_contrast.colors.switchTrack.checked.border',
          },
        },
        switchKnob: {
          bg: 'colorSchemes.dark_high_contrast.colors.switchKnob.bg',
          border: 'colorSchemes.dark_high_contrast.colors.switchKnob.border',
          disabledBg:
            'colorSchemes.dark_high_contrast.colors.switchKnob.disabledBg',
          checked: {
            bg: 'colorSchemes.dark_high_contrast.colors.switchKnob.checked.bg',
            disabledBg:
              'colorSchemes.dark_high_contrast.colors.switchKnob.checked.disabledBg',
            border:
              'colorSchemes.dark_high_contrast.colors.switchKnob.checked.border',
          },
        },
        segmentedControl: {
          bg: 'colorSchemes.dark_high_contrast.colors.segmentedControl.bg',
          button: {
            bg: 'colorSchemes.dark_high_contrast.colors.segmentedControl.button.bg',
            hover: {
              bg: 'colorSchemes.dark_high_contrast.colors.segmentedControl.button.hover.bg',
            },
            active: {
              bg: 'colorSchemes.dark_high_contrast.colors.segmentedControl.button.active.bg',
            },
            selected: {
              border:
                'colorSchemes.dark_high_contrast.colors.segmentedControl.button.selected.border',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg:
              'colorSchemes.dark_high_contrast.colors.treeViewItem.chevron.hoverBg',
          },
          directory: {
            fill: 'colorSchemes.dark_high_contrast.colors.treeViewItem.directory.fill',
          },
        },
        fg: {
          default: 'colorSchemes.dark_high_contrast.colors.fg.default',
          muted: 'colorSchemes.dark_high_contrast.colors.fg.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.fg.subtle',
          onEmphasis: 'colorSchemes.dark_high_contrast.colors.fg.onEmphasis',
        },
        canvas: {
          default: 'colorSchemes.dark_high_contrast.colors.canvas.default',
          overlay: 'colorSchemes.dark_high_contrast.colors.canvas.overlay',
          inset: 'colorSchemes.dark_high_contrast.colors.canvas.inset',
          subtle: 'colorSchemes.dark_high_contrast.colors.canvas.subtle',
        },
        border: {
          default: 'colorSchemes.dark_high_contrast.colors.border.default',
          muted: 'colorSchemes.dark_high_contrast.colors.border.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.border.subtle',
        },
        neutral: {
          emphasisPlus:
            'colorSchemes.dark_high_contrast.colors.neutral.emphasisPlus',
          emphasis: 'colorSchemes.dark_high_contrast.colors.neutral.emphasis',
          muted: 'colorSchemes.dark_high_contrast.colors.neutral.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.neutral.subtle',
        },
        accent: {
          fg: 'colorSchemes.dark_high_contrast.colors.accent.fg',
          emphasis: 'colorSchemes.dark_high_contrast.colors.accent.emphasis',
          muted: 'colorSchemes.dark_high_contrast.colors.accent.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.accent.subtle',
        },
        success: {
          fg: 'colorSchemes.dark_high_contrast.colors.success.fg',
          emphasis: 'colorSchemes.dark_high_contrast.colors.success.emphasis',
          muted: 'colorSchemes.dark_high_contrast.colors.success.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.success.subtle',
        },
        attention: {
          fg: 'colorSchemes.dark_high_contrast.colors.attention.fg',
          emphasis: 'colorSchemes.dark_high_contrast.colors.attention.emphasis',
          muted: 'colorSchemes.dark_high_contrast.colors.attention.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.attention.subtle',
        },
        severe: {
          fg: 'colorSchemes.dark_high_contrast.colors.severe.fg',
          emphasis: 'colorSchemes.dark_high_contrast.colors.severe.emphasis',
          muted: 'colorSchemes.dark_high_contrast.colors.severe.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.severe.subtle',
        },
        danger: {
          fg: 'colorSchemes.dark_high_contrast.colors.danger.fg',
          emphasis: 'colorSchemes.dark_high_contrast.colors.danger.emphasis',
          muted: 'colorSchemes.dark_high_contrast.colors.danger.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.danger.subtle',
        },
        open: {
          fg: 'colorSchemes.dark_high_contrast.colors.open.fg',
          emphasis: 'colorSchemes.dark_high_contrast.colors.open.emphasis',
          muted: 'colorSchemes.dark_high_contrast.colors.open.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.open.subtle',
        },
        closed: {
          fg: 'colorSchemes.dark_high_contrast.colors.closed.fg',
          emphasis: 'colorSchemes.dark_high_contrast.colors.closed.emphasis',
          muted: 'colorSchemes.dark_high_contrast.colors.closed.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.closed.subtle',
        },
        done: {
          fg: 'colorSchemes.dark_high_contrast.colors.done.fg',
          emphasis: 'colorSchemes.dark_high_contrast.colors.done.emphasis',
          muted: 'colorSchemes.dark_high_contrast.colors.done.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.done.subtle',
        },
        sponsors: {
          fg: 'colorSchemes.dark_high_contrast.colors.sponsors.fg',
          emphasis: 'colorSchemes.dark_high_contrast.colors.sponsors.emphasis',
          muted: 'colorSchemes.dark_high_contrast.colors.sponsors.muted',
          subtle: 'colorSchemes.dark_high_contrast.colors.sponsors.subtle',
        },
        primer: {
          fg: {
            disabled:
              'colorSchemes.dark_high_contrast.colors.primer.fg.disabled',
          },
          canvas: {
            backdrop:
              'colorSchemes.dark_high_contrast.colors.primer.canvas.backdrop',
            sticky:
              'colorSchemes.dark_high_contrast.colors.primer.canvas.sticky',
          },
          border: {
            active:
              'colorSchemes.dark_high_contrast.colors.primer.border.active',
            contrast:
              'colorSchemes.dark_high_contrast.colors.primer.border.contrast',
          },
        },
      },
      shadows: {
        checks: {
          inputShadow:
            'colorSchemes.dark_high_contrast.shadows.checks.inputShadow',
        },
        mktg: {
          btn: {
            shadow: {
              outline:
                'colorSchemes.dark_high_contrast.shadows.mktg.btn.shadow.outline',
              focus:
                'colorSchemes.dark_high_contrast.shadows.mktg.btn.shadow.focus',
              hover:
                'colorSchemes.dark_high_contrast.shadows.mktg.btn.shadow.hover',
              hoverMuted:
                'colorSchemes.dark_high_contrast.shadows.mktg.btn.shadow.hoverMuted',
            },
          },
        },
        avatar: {
          childShadow:
            'colorSchemes.dark_high_contrast.shadows.avatar.childShadow',
        },
        overlay: {
          shadow: 'colorSchemes.dark_high_contrast.shadows.overlay.shadow',
        },
        btn: {
          shadow: 'colorSchemes.dark_high_contrast.shadows.btn.shadow',
          insetShadow:
            'colorSchemes.dark_high_contrast.shadows.btn.insetShadow',
          primary: {
            shadow:
              'colorSchemes.dark_high_contrast.shadows.btn.primary.shadow',
            insetShadow:
              'colorSchemes.dark_high_contrast.shadows.btn.primary.insetShadow',
            selectedShadow:
              'colorSchemes.dark_high_contrast.shadows.btn.primary.selectedShadow',
          },
          outline: {
            hoverShadow:
              'colorSchemes.dark_high_contrast.shadows.btn.outline.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.dark_high_contrast.shadows.btn.outline.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.dark_high_contrast.shadows.btn.outline.selectedShadow',
          },
          danger: {
            hoverShadow:
              'colorSchemes.dark_high_contrast.shadows.btn.danger.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.dark_high_contrast.shadows.btn.danger.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.dark_high_contrast.shadows.btn.danger.selectedShadow',
          },
        },
        shadow: {
          small: 'colorSchemes.dark_high_contrast.shadows.shadow.small',
          medium: 'colorSchemes.dark_high_contrast.shadows.shadow.medium',
          large: 'colorSchemes.dark_high_contrast.shadows.shadow.large',
          extraLarge:
            'colorSchemes.dark_high_contrast.shadows.shadow.extraLarge',
        },
        primer: {
          shadow: {
            highlight:
              'colorSchemes.dark_high_contrast.shadows.primer.shadow.highlight',
            inset:
              'colorSchemes.dark_high_contrast.shadows.primer.shadow.inset',
          },
        },
      },
    },
    dark_colorblind: {
      colors: {
        canvasDefaultTransparent:
          'colorSchemes.dark_colorblind.colors.canvasDefaultTransparent',
        pageHeaderBg: 'colorSchemes.dark_colorblind.colors.pageHeaderBg',
        marketingIcon: {
          primary: 'colorSchemes.dark_colorblind.colors.marketingIcon.primary',
          secondary:
            'colorSchemes.dark_colorblind.colors.marketingIcon.secondary',
        },
        diffBlob: {
          addition: {
            numText:
              'colorSchemes.dark_colorblind.colors.diffBlob.addition.numText',
            fg: 'colorSchemes.dark_colorblind.colors.diffBlob.addition.fg',
            numBg:
              'colorSchemes.dark_colorblind.colors.diffBlob.addition.numBg',
            lineBg:
              'colorSchemes.dark_colorblind.colors.diffBlob.addition.lineBg',
            wordBg:
              'colorSchemes.dark_colorblind.colors.diffBlob.addition.wordBg',
          },
          deletion: {
            numText:
              'colorSchemes.dark_colorblind.colors.diffBlob.deletion.numText',
            fg: 'colorSchemes.dark_colorblind.colors.diffBlob.deletion.fg',
            numBg:
              'colorSchemes.dark_colorblind.colors.diffBlob.deletion.numBg',
            lineBg:
              'colorSchemes.dark_colorblind.colors.diffBlob.deletion.lineBg',
            wordBg:
              'colorSchemes.dark_colorblind.colors.diffBlob.deletion.wordBg',
          },
          hunk: {
            numBg: 'colorSchemes.dark_colorblind.colors.diffBlob.hunk.numBg',
          },
          expander: {
            icon: 'colorSchemes.dark_colorblind.colors.diffBlob.expander.icon',
          },
        },
        diffstat: {
          deletionBorder:
            'colorSchemes.dark_colorblind.colors.diffstat.deletionBorder',
          additionBorder:
            'colorSchemes.dark_colorblind.colors.diffstat.additionBorder',
          additionBg: 'colorSchemes.dark_colorblind.colors.diffstat.additionBg',
        },
        searchKeyword: {
          hl: 'colorSchemes.dark_colorblind.colors.searchKeyword.hl',
        },
        prettylights: {
          syntax: {
            comment:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.comment',
            constant:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.constant',
            entity:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.entity',
            storageModifierImport:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.storageModifierImport',
            entityTag:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.entityTag',
            keyword:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.keyword',
            string:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.string',
            variable:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.variable',
            brackethighlighterUnmatched:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.brackethighlighterUnmatched',
            invalidIllegalText:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.invalidIllegalText',
            invalidIllegalBg:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.invalidIllegalBg',
            carriageReturnText:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.carriageReturnText',
            carriageReturnBg:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.carriageReturnBg',
            stringRegexp:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.stringRegexp',
            markupList:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupList',
            markupHeading:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupHeading',
            markupItalic:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupItalic',
            markupBold:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupBold',
            markupDeletedText:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupDeletedText',
            markupDeletedBg:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupDeletedBg',
            markupInsertedText:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupInsertedText',
            markupInsertedBg:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupInsertedBg',
            markupChangedText:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupChangedText',
            markupChangedBg:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupChangedBg',
            markupIgnoredText:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupIgnoredText',
            markupIgnoredBg:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.markupIgnoredBg',
            metaDiffRange:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.metaDiffRange',
            brackethighlighterAngle:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.brackethighlighterAngle',
            sublimelinterGutterMark:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.sublimelinterGutterMark',
            constantOtherReferenceLink:
              'colorSchemes.dark_colorblind.colors.prettylights.syntax.constantOtherReferenceLink',
          },
        },
        codemirror: {
          text: 'colorSchemes.dark_colorblind.colors.codemirror.text',
          bg: 'colorSchemes.dark_colorblind.colors.codemirror.bg',
          guttersBg: 'colorSchemes.dark_colorblind.colors.codemirror.guttersBg',
          guttermarkerText:
            'colorSchemes.dark_colorblind.colors.codemirror.guttermarkerText',
          guttermarkerSubtleText:
            'colorSchemes.dark_colorblind.colors.codemirror.guttermarkerSubtleText',
          linenumberText:
            'colorSchemes.dark_colorblind.colors.codemirror.linenumberText',
          cursor: 'colorSchemes.dark_colorblind.colors.codemirror.cursor',
          selectionBg:
            'colorSchemes.dark_colorblind.colors.codemirror.selectionBg',
          activelineBg:
            'colorSchemes.dark_colorblind.colors.codemirror.activelineBg',
          matchingbracketText:
            'colorSchemes.dark_colorblind.colors.codemirror.matchingbracketText',
          linesBg: 'colorSchemes.dark_colorblind.colors.codemirror.linesBg',
          syntax: {
            comment:
              'colorSchemes.dark_colorblind.colors.codemirror.syntax.comment',
            constant:
              'colorSchemes.dark_colorblind.colors.codemirror.syntax.constant',
            entity:
              'colorSchemes.dark_colorblind.colors.codemirror.syntax.entity',
            keyword:
              'colorSchemes.dark_colorblind.colors.codemirror.syntax.keyword',
            storage:
              'colorSchemes.dark_colorblind.colors.codemirror.syntax.storage',
            string:
              'colorSchemes.dark_colorblind.colors.codemirror.syntax.string',
            support:
              'colorSchemes.dark_colorblind.colors.codemirror.syntax.support',
            variable:
              'colorSchemes.dark_colorblind.colors.codemirror.syntax.variable',
          },
        },
        checks: {
          bg: 'colorSchemes.dark_colorblind.colors.checks.bg',
          textPrimary: 'colorSchemes.dark_colorblind.colors.checks.textPrimary',
          textSecondary:
            'colorSchemes.dark_colorblind.colors.checks.textSecondary',
          textLink: 'colorSchemes.dark_colorblind.colors.checks.textLink',
          btnIcon: 'colorSchemes.dark_colorblind.colors.checks.btnIcon',
          btnHoverIcon:
            'colorSchemes.dark_colorblind.colors.checks.btnHoverIcon',
          btnHoverBg: 'colorSchemes.dark_colorblind.colors.checks.btnHoverBg',
          inputText: 'colorSchemes.dark_colorblind.colors.checks.inputText',
          inputPlaceholderText:
            'colorSchemes.dark_colorblind.colors.checks.inputPlaceholderText',
          inputFocusText:
            'colorSchemes.dark_colorblind.colors.checks.inputFocusText',
          inputBg: 'colorSchemes.dark_colorblind.colors.checks.inputBg',
          donutError: 'colorSchemes.dark_colorblind.colors.checks.donutError',
          donutPending:
            'colorSchemes.dark_colorblind.colors.checks.donutPending',
          donutSuccess:
            'colorSchemes.dark_colorblind.colors.checks.donutSuccess',
          donutNeutral:
            'colorSchemes.dark_colorblind.colors.checks.donutNeutral',
          dropdownText:
            'colorSchemes.dark_colorblind.colors.checks.dropdownText',
          dropdownBg: 'colorSchemes.dark_colorblind.colors.checks.dropdownBg',
          dropdownBorder:
            'colorSchemes.dark_colorblind.colors.checks.dropdownBorder',
          dropdownShadow:
            'colorSchemes.dark_colorblind.colors.checks.dropdownShadow',
          dropdownHoverText:
            'colorSchemes.dark_colorblind.colors.checks.dropdownHoverText',
          dropdownHoverBg:
            'colorSchemes.dark_colorblind.colors.checks.dropdownHoverBg',
          dropdownBtnHoverText:
            'colorSchemes.dark_colorblind.colors.checks.dropdownBtnHoverText',
          dropdownBtnHoverBg:
            'colorSchemes.dark_colorblind.colors.checks.dropdownBtnHoverBg',
          scrollbarThumbBg:
            'colorSchemes.dark_colorblind.colors.checks.scrollbarThumbBg',
          headerLabelText:
            'colorSchemes.dark_colorblind.colors.checks.headerLabelText',
          headerLabelOpenText:
            'colorSchemes.dark_colorblind.colors.checks.headerLabelOpenText',
          headerBorder:
            'colorSchemes.dark_colorblind.colors.checks.headerBorder',
          headerIcon: 'colorSchemes.dark_colorblind.colors.checks.headerIcon',
          lineText: 'colorSchemes.dark_colorblind.colors.checks.lineText',
          lineNumText: 'colorSchemes.dark_colorblind.colors.checks.lineNumText',
          lineTimestampText:
            'colorSchemes.dark_colorblind.colors.checks.lineTimestampText',
          lineHoverBg: 'colorSchemes.dark_colorblind.colors.checks.lineHoverBg',
          lineSelectedBg:
            'colorSchemes.dark_colorblind.colors.checks.lineSelectedBg',
          lineSelectedNumText:
            'colorSchemes.dark_colorblind.colors.checks.lineSelectedNumText',
          lineDtFmText:
            'colorSchemes.dark_colorblind.colors.checks.lineDtFmText',
          lineDtFmBg: 'colorSchemes.dark_colorblind.colors.checks.lineDtFmBg',
          gateBg: 'colorSchemes.dark_colorblind.colors.checks.gateBg',
          gateText: 'colorSchemes.dark_colorblind.colors.checks.gateText',
          gateWaitingText:
            'colorSchemes.dark_colorblind.colors.checks.gateWaitingText',
          stepHeaderOpenBg:
            'colorSchemes.dark_colorblind.colors.checks.stepHeaderOpenBg',
          stepErrorText:
            'colorSchemes.dark_colorblind.colors.checks.stepErrorText',
          stepWarningText:
            'colorSchemes.dark_colorblind.colors.checks.stepWarningText',
          loglineText: 'colorSchemes.dark_colorblind.colors.checks.loglineText',
          loglineNumText:
            'colorSchemes.dark_colorblind.colors.checks.loglineNumText',
          loglineDebugText:
            'colorSchemes.dark_colorblind.colors.checks.loglineDebugText',
          loglineErrorText:
            'colorSchemes.dark_colorblind.colors.checks.loglineErrorText',
          loglineErrorNumText:
            'colorSchemes.dark_colorblind.colors.checks.loglineErrorNumText',
          loglineErrorBg:
            'colorSchemes.dark_colorblind.colors.checks.loglineErrorBg',
          loglineWarningText:
            'colorSchemes.dark_colorblind.colors.checks.loglineWarningText',
          loglineWarningNumText:
            'colorSchemes.dark_colorblind.colors.checks.loglineWarningNumText',
          loglineWarningBg:
            'colorSchemes.dark_colorblind.colors.checks.loglineWarningBg',
          loglineCommandText:
            'colorSchemes.dark_colorblind.colors.checks.loglineCommandText',
          loglineSectionText:
            'colorSchemes.dark_colorblind.colors.checks.loglineSectionText',
          ansi: {
            black: 'colorSchemes.dark_colorblind.colors.checks.ansi.black',
            blackBright:
              'colorSchemes.dark_colorblind.colors.checks.ansi.blackBright',
            white: 'colorSchemes.dark_colorblind.colors.checks.ansi.white',
            whiteBright:
              'colorSchemes.dark_colorblind.colors.checks.ansi.whiteBright',
            gray: 'colorSchemes.dark_colorblind.colors.checks.ansi.gray',
            red: 'colorSchemes.dark_colorblind.colors.checks.ansi.red',
            redBright:
              'colorSchemes.dark_colorblind.colors.checks.ansi.redBright',
            green: 'colorSchemes.dark_colorblind.colors.checks.ansi.green',
            greenBright:
              'colorSchemes.dark_colorblind.colors.checks.ansi.greenBright',
            yellow: 'colorSchemes.dark_colorblind.colors.checks.ansi.yellow',
            yellowBright:
              'colorSchemes.dark_colorblind.colors.checks.ansi.yellowBright',
            blue: 'colorSchemes.dark_colorblind.colors.checks.ansi.blue',
            blueBright:
              'colorSchemes.dark_colorblind.colors.checks.ansi.blueBright',
            magenta: 'colorSchemes.dark_colorblind.colors.checks.ansi.magenta',
            magentaBright:
              'colorSchemes.dark_colorblind.colors.checks.ansi.magentaBright',
            cyan: 'colorSchemes.dark_colorblind.colors.checks.ansi.cyan',
            cyanBright:
              'colorSchemes.dark_colorblind.colors.checks.ansi.cyanBright',
          },
        },
        project: {
          headerBg: 'colorSchemes.dark_colorblind.colors.project.headerBg',
          sidebarBg: 'colorSchemes.dark_colorblind.colors.project.sidebarBg',
          gradientIn: 'colorSchemes.dark_colorblind.colors.project.gradientIn',
          gradientOut:
            'colorSchemes.dark_colorblind.colors.project.gradientOut',
        },
        mktg: {
          btn: {
            bg: 'colorSchemes.dark_colorblind.colors.mktg.btn.bg',
          },
        },
        control: {
          borderColor: {
            emphasis:
              'colorSchemes.dark_colorblind.colors.control.borderColor.emphasis',
          },
        },
        avatar: {
          bg: 'colorSchemes.dark_colorblind.colors.avatar.bg',
          border: 'colorSchemes.dark_colorblind.colors.avatar.border',
          stackFade: 'colorSchemes.dark_colorblind.colors.avatar.stackFade',
          stackFadeMore:
            'colorSchemes.dark_colorblind.colors.avatar.stackFadeMore',
        },
        topicTag: {
          border: 'colorSchemes.dark_colorblind.colors.topicTag.border',
        },
        counter: {
          border: 'colorSchemes.dark_colorblind.colors.counter.border',
        },
        selectMenu: {
          backdropBorder:
            'colorSchemes.dark_colorblind.colors.selectMenu.backdropBorder',
          tapHighlight:
            'colorSchemes.dark_colorblind.colors.selectMenu.tapHighlight',
          tapFocusBg:
            'colorSchemes.dark_colorblind.colors.selectMenu.tapFocusBg',
        },
        header: {
          text: 'colorSchemes.dark_colorblind.colors.header.text',
          bg: 'colorSchemes.dark_colorblind.colors.header.bg',
          divider: 'colorSchemes.dark_colorblind.colors.header.divider',
          logo: 'colorSchemes.dark_colorblind.colors.header.logo',
        },
        headerSearch: {
          bg: 'colorSchemes.dark_colorblind.colors.headerSearch.bg',
          border: 'colorSchemes.dark_colorblind.colors.headerSearch.border',
        },
        sidenav: {
          selectedBg: 'colorSchemes.dark_colorblind.colors.sidenav.selectedBg',
        },
        menu: {
          bgActive: 'colorSchemes.dark_colorblind.colors.menu.bgActive',
        },
        input: {
          disabledBg: 'colorSchemes.dark_colorblind.colors.input.disabledBg',
        },
        timeline: {
          badgeBg: 'colorSchemes.dark_colorblind.colors.timeline.badgeBg',
        },
        ansi: {
          black: 'colorSchemes.dark_colorblind.colors.ansi.black',
          blackBright: 'colorSchemes.dark_colorblind.colors.ansi.blackBright',
          white: 'colorSchemes.dark_colorblind.colors.ansi.white',
          whiteBright: 'colorSchemes.dark_colorblind.colors.ansi.whiteBright',
          gray: 'colorSchemes.dark_colorblind.colors.ansi.gray',
          red: 'colorSchemes.dark_colorblind.colors.ansi.red',
          redBright: 'colorSchemes.dark_colorblind.colors.ansi.redBright',
          green: 'colorSchemes.dark_colorblind.colors.ansi.green',
          greenBright: 'colorSchemes.dark_colorblind.colors.ansi.greenBright',
          yellow: 'colorSchemes.dark_colorblind.colors.ansi.yellow',
          yellowBright: 'colorSchemes.dark_colorblind.colors.ansi.yellowBright',
          blue: 'colorSchemes.dark_colorblind.colors.ansi.blue',
          blueBright: 'colorSchemes.dark_colorblind.colors.ansi.blueBright',
          magenta: 'colorSchemes.dark_colorblind.colors.ansi.magenta',
          magentaBright:
            'colorSchemes.dark_colorblind.colors.ansi.magentaBright',
          cyan: 'colorSchemes.dark_colorblind.colors.ansi.cyan',
          cyanBright: 'colorSchemes.dark_colorblind.colors.ansi.cyanBright',
        },
        btn: {
          text: 'colorSchemes.dark_colorblind.colors.btn.text',
          bg: 'colorSchemes.dark_colorblind.colors.btn.bg',
          border: 'colorSchemes.dark_colorblind.colors.btn.border',
          hoverBg: 'colorSchemes.dark_colorblind.colors.btn.hoverBg',
          hoverBorder: 'colorSchemes.dark_colorblind.colors.btn.hoverBorder',
          activeBg: 'colorSchemes.dark_colorblind.colors.btn.activeBg',
          activeBorder: 'colorSchemes.dark_colorblind.colors.btn.activeBorder',
          selectedBg: 'colorSchemes.dark_colorblind.colors.btn.selectedBg',
          counterBg: 'colorSchemes.dark_colorblind.colors.btn.counterBg',
          primary: {
            text: 'colorSchemes.dark_colorblind.colors.btn.primary.text',
            bg: 'colorSchemes.dark_colorblind.colors.btn.primary.bg',
            border: 'colorSchemes.dark_colorblind.colors.btn.primary.border',
            hoverBg: 'colorSchemes.dark_colorblind.colors.btn.primary.hoverBg',
            hoverBorder:
              'colorSchemes.dark_colorblind.colors.btn.primary.hoverBorder',
            selectedBg:
              'colorSchemes.dark_colorblind.colors.btn.primary.selectedBg',
            disabledText:
              'colorSchemes.dark_colorblind.colors.btn.primary.disabledText',
            disabledBg:
              'colorSchemes.dark_colorblind.colors.btn.primary.disabledBg',
            disabledBorder:
              'colorSchemes.dark_colorblind.colors.btn.primary.disabledBorder',
            icon: 'colorSchemes.dark_colorblind.colors.btn.primary.icon',
            counterBg:
              'colorSchemes.dark_colorblind.colors.btn.primary.counterBg',
          },
          outline: {
            text: 'colorSchemes.dark_colorblind.colors.btn.outline.text',
            hoverText:
              'colorSchemes.dark_colorblind.colors.btn.outline.hoverText',
            hoverBg: 'colorSchemes.dark_colorblind.colors.btn.outline.hoverBg',
            hoverBorder:
              'colorSchemes.dark_colorblind.colors.btn.outline.hoverBorder',
            hoverCounterBg:
              'colorSchemes.dark_colorblind.colors.btn.outline.hoverCounterBg',
            selectedText:
              'colorSchemes.dark_colorblind.colors.btn.outline.selectedText',
            selectedBg:
              'colorSchemes.dark_colorblind.colors.btn.outline.selectedBg',
            selectedBorder:
              'colorSchemes.dark_colorblind.colors.btn.outline.selectedBorder',
            disabledText:
              'colorSchemes.dark_colorblind.colors.btn.outline.disabledText',
            disabledBg:
              'colorSchemes.dark_colorblind.colors.btn.outline.disabledBg',
            disabledCounterBg:
              'colorSchemes.dark_colorblind.colors.btn.outline.disabledCounterBg',
            counterBg:
              'colorSchemes.dark_colorblind.colors.btn.outline.counterBg',
          },
          danger: {
            text: 'colorSchemes.dark_colorblind.colors.btn.danger.text',
            hoverText:
              'colorSchemes.dark_colorblind.colors.btn.danger.hoverText',
            hoverBg: 'colorSchemes.dark_colorblind.colors.btn.danger.hoverBg',
            hoverBorder:
              'colorSchemes.dark_colorblind.colors.btn.danger.hoverBorder',
            hoverIcon:
              'colorSchemes.dark_colorblind.colors.btn.danger.hoverIcon',
            hoverCounterBg:
              'colorSchemes.dark_colorblind.colors.btn.danger.hoverCounterBg',
            selectedText:
              'colorSchemes.dark_colorblind.colors.btn.danger.selectedText',
            selectedBg:
              'colorSchemes.dark_colorblind.colors.btn.danger.selectedBg',
            selectedBorder:
              'colorSchemes.dark_colorblind.colors.btn.danger.selectedBorder',
            disabledText:
              'colorSchemes.dark_colorblind.colors.btn.danger.disabledText',
            disabledBg:
              'colorSchemes.dark_colorblind.colors.btn.danger.disabledBg',
            disabledCounterBg:
              'colorSchemes.dark_colorblind.colors.btn.danger.disabledCounterBg',
            counterBg:
              'colorSchemes.dark_colorblind.colors.btn.danger.counterBg',
            icon: 'colorSchemes.dark_colorblind.colors.btn.danger.icon',
          },
        },
        underlinenav: {
          icon: 'colorSchemes.dark_colorblind.colors.underlinenav.icon',
          borderHover:
            'colorSchemes.dark_colorblind.colors.underlinenav.borderHover',
        },
        actionListItem: {
          inlineDivider:
            'colorSchemes.dark_colorblind.colors.actionListItem.inlineDivider',
          default: {
            hoverBg:
              'colorSchemes.dark_colorblind.colors.actionListItem.default.hoverBg',
            hoverBorder:
              'colorSchemes.dark_colorblind.colors.actionListItem.default.hoverBorder',
            activeBg:
              'colorSchemes.dark_colorblind.colors.actionListItem.default.activeBg',
            activeBorder:
              'colorSchemes.dark_colorblind.colors.actionListItem.default.activeBorder',
            selectedBg:
              'colorSchemes.dark_colorblind.colors.actionListItem.default.selectedBg',
          },
          danger: {
            hoverBg:
              'colorSchemes.dark_colorblind.colors.actionListItem.danger.hoverBg',
            activeBg:
              'colorSchemes.dark_colorblind.colors.actionListItem.danger.activeBg',
            hoverText:
              'colorSchemes.dark_colorblind.colors.actionListItem.danger.hoverText',
          },
        },
        switchTrack: {
          bg: 'colorSchemes.dark_colorblind.colors.switchTrack.bg',
          hoverBg: 'colorSchemes.dark_colorblind.colors.switchTrack.hoverBg',
          activeBg: 'colorSchemes.dark_colorblind.colors.switchTrack.activeBg',
          disabledBg:
            'colorSchemes.dark_colorblind.colors.switchTrack.disabledBg',
          fg: 'colorSchemes.dark_colorblind.colors.switchTrack.fg',
          disabledFg:
            'colorSchemes.dark_colorblind.colors.switchTrack.disabledFg',
          border: 'colorSchemes.dark_colorblind.colors.switchTrack.border',
          checked: {
            bg: 'colorSchemes.dark_colorblind.colors.switchTrack.checked.bg',
            hoverBg:
              'colorSchemes.dark_colorblind.colors.switchTrack.checked.hoverBg',
            activeBg:
              'colorSchemes.dark_colorblind.colors.switchTrack.checked.activeBg',
            fg: 'colorSchemes.dark_colorblind.colors.switchTrack.checked.fg',
            disabledFg:
              'colorSchemes.dark_colorblind.colors.switchTrack.checked.disabledFg',
            border:
              'colorSchemes.dark_colorblind.colors.switchTrack.checked.border',
          },
        },
        switchKnob: {
          bg: 'colorSchemes.dark_colorblind.colors.switchKnob.bg',
          border: 'colorSchemes.dark_colorblind.colors.switchKnob.border',
          disabledBg:
            'colorSchemes.dark_colorblind.colors.switchKnob.disabledBg',
          checked: {
            bg: 'colorSchemes.dark_colorblind.colors.switchKnob.checked.bg',
            disabledBg:
              'colorSchemes.dark_colorblind.colors.switchKnob.checked.disabledBg',
            border:
              'colorSchemes.dark_colorblind.colors.switchKnob.checked.border',
          },
        },
        segmentedControl: {
          bg: 'colorSchemes.dark_colorblind.colors.segmentedControl.bg',
          button: {
            bg: 'colorSchemes.dark_colorblind.colors.segmentedControl.button.bg',
            hover: {
              bg: 'colorSchemes.dark_colorblind.colors.segmentedControl.button.hover.bg',
            },
            active: {
              bg: 'colorSchemes.dark_colorblind.colors.segmentedControl.button.active.bg',
            },
            selected: {
              border:
                'colorSchemes.dark_colorblind.colors.segmentedControl.button.selected.border',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg:
              'colorSchemes.dark_colorblind.colors.treeViewItem.chevron.hoverBg',
          },
          directory: {
            fill: 'colorSchemes.dark_colorblind.colors.treeViewItem.directory.fill',
          },
        },
        fg: {
          default: 'colorSchemes.dark_colorblind.colors.fg.default',
          muted: 'colorSchemes.dark_colorblind.colors.fg.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.fg.subtle',
          onEmphasis: 'colorSchemes.dark_colorblind.colors.fg.onEmphasis',
        },
        canvas: {
          default: 'colorSchemes.dark_colorblind.colors.canvas.default',
          overlay: 'colorSchemes.dark_colorblind.colors.canvas.overlay',
          inset: 'colorSchemes.dark_colorblind.colors.canvas.inset',
          subtle: 'colorSchemes.dark_colorblind.colors.canvas.subtle',
        },
        border: {
          default: 'colorSchemes.dark_colorblind.colors.border.default',
          muted: 'colorSchemes.dark_colorblind.colors.border.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.border.subtle',
        },
        neutral: {
          emphasisPlus:
            'colorSchemes.dark_colorblind.colors.neutral.emphasisPlus',
          emphasis: 'colorSchemes.dark_colorblind.colors.neutral.emphasis',
          muted: 'colorSchemes.dark_colorblind.colors.neutral.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.neutral.subtle',
        },
        accent: {
          fg: 'colorSchemes.dark_colorblind.colors.accent.fg',
          emphasis: 'colorSchemes.dark_colorblind.colors.accent.emphasis',
          muted: 'colorSchemes.dark_colorblind.colors.accent.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.accent.subtle',
        },
        success: {
          fg: 'colorSchemes.dark_colorblind.colors.success.fg',
          emphasis: 'colorSchemes.dark_colorblind.colors.success.emphasis',
          muted: 'colorSchemes.dark_colorblind.colors.success.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.success.subtle',
        },
        attention: {
          fg: 'colorSchemes.dark_colorblind.colors.attention.fg',
          emphasis: 'colorSchemes.dark_colorblind.colors.attention.emphasis',
          muted: 'colorSchemes.dark_colorblind.colors.attention.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.attention.subtle',
        },
        severe: {
          fg: 'colorSchemes.dark_colorblind.colors.severe.fg',
          emphasis: 'colorSchemes.dark_colorblind.colors.severe.emphasis',
          muted: 'colorSchemes.dark_colorblind.colors.severe.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.severe.subtle',
        },
        danger: {
          fg: 'colorSchemes.dark_colorblind.colors.danger.fg',
          emphasis: 'colorSchemes.dark_colorblind.colors.danger.emphasis',
          muted: 'colorSchemes.dark_colorblind.colors.danger.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.danger.subtle',
        },
        open: {
          fg: 'colorSchemes.dark_colorblind.colors.open.fg',
          emphasis: 'colorSchemes.dark_colorblind.colors.open.emphasis',
          muted: 'colorSchemes.dark_colorblind.colors.open.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.open.subtle',
        },
        closed: {
          fg: 'colorSchemes.dark_colorblind.colors.closed.fg',
          emphasis: 'colorSchemes.dark_colorblind.colors.closed.emphasis',
          muted: 'colorSchemes.dark_colorblind.colors.closed.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.closed.subtle',
        },
        done: {
          fg: 'colorSchemes.dark_colorblind.colors.done.fg',
          emphasis: 'colorSchemes.dark_colorblind.colors.done.emphasis',
          muted: 'colorSchemes.dark_colorblind.colors.done.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.done.subtle',
        },
        sponsors: {
          fg: 'colorSchemes.dark_colorblind.colors.sponsors.fg',
          emphasis: 'colorSchemes.dark_colorblind.colors.sponsors.emphasis',
          muted: 'colorSchemes.dark_colorblind.colors.sponsors.muted',
          subtle: 'colorSchemes.dark_colorblind.colors.sponsors.subtle',
        },
        primer: {
          fg: {
            disabled: 'colorSchemes.dark_colorblind.colors.primer.fg.disabled',
          },
          canvas: {
            backdrop:
              'colorSchemes.dark_colorblind.colors.primer.canvas.backdrop',
            sticky: 'colorSchemes.dark_colorblind.colors.primer.canvas.sticky',
          },
          border: {
            active: 'colorSchemes.dark_colorblind.colors.primer.border.active',
            contrast:
              'colorSchemes.dark_colorblind.colors.primer.border.contrast',
          },
        },
      },
      shadows: {
        checks: {
          inputShadow:
            'colorSchemes.dark_colorblind.shadows.checks.inputShadow',
        },
        mktg: {
          btn: {
            shadow: {
              outline:
                'colorSchemes.dark_colorblind.shadows.mktg.btn.shadow.outline',
              focus:
                'colorSchemes.dark_colorblind.shadows.mktg.btn.shadow.focus',
              hover:
                'colorSchemes.dark_colorblind.shadows.mktg.btn.shadow.hover',
              hoverMuted:
                'colorSchemes.dark_colorblind.shadows.mktg.btn.shadow.hoverMuted',
            },
          },
        },
        avatar: {
          childShadow:
            'colorSchemes.dark_colorblind.shadows.avatar.childShadow',
        },
        overlay: {
          shadow: 'colorSchemes.dark_colorblind.shadows.overlay.shadow',
        },
        btn: {
          shadow: 'colorSchemes.dark_colorblind.shadows.btn.shadow',
          insetShadow: 'colorSchemes.dark_colorblind.shadows.btn.insetShadow',
          primary: {
            shadow: 'colorSchemes.dark_colorblind.shadows.btn.primary.shadow',
            insetShadow:
              'colorSchemes.dark_colorblind.shadows.btn.primary.insetShadow',
            selectedShadow:
              'colorSchemes.dark_colorblind.shadows.btn.primary.selectedShadow',
          },
          outline: {
            hoverShadow:
              'colorSchemes.dark_colorblind.shadows.btn.outline.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.dark_colorblind.shadows.btn.outline.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.dark_colorblind.shadows.btn.outline.selectedShadow',
          },
          danger: {
            hoverShadow:
              'colorSchemes.dark_colorblind.shadows.btn.danger.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.dark_colorblind.shadows.btn.danger.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.dark_colorblind.shadows.btn.danger.selectedShadow',
          },
        },
        shadow: {
          small: 'colorSchemes.dark_colorblind.shadows.shadow.small',
          medium: 'colorSchemes.dark_colorblind.shadows.shadow.medium',
          large: 'colorSchemes.dark_colorblind.shadows.shadow.large',
          extraLarge: 'colorSchemes.dark_colorblind.shadows.shadow.extraLarge',
        },
        primer: {
          shadow: {
            highlight:
              'colorSchemes.dark_colorblind.shadows.primer.shadow.highlight',
            inset: 'colorSchemes.dark_colorblind.shadows.primer.shadow.inset',
          },
        },
      },
    },
    dark_tritanopia: {
      colors: {
        canvasDefaultTransparent:
          'colorSchemes.dark_tritanopia.colors.canvasDefaultTransparent',
        pageHeaderBg: 'colorSchemes.dark_tritanopia.colors.pageHeaderBg',
        marketingIcon: {
          primary: 'colorSchemes.dark_tritanopia.colors.marketingIcon.primary',
          secondary:
            'colorSchemes.dark_tritanopia.colors.marketingIcon.secondary',
        },
        diffBlob: {
          addition: {
            numText:
              'colorSchemes.dark_tritanopia.colors.diffBlob.addition.numText',
            fg: 'colorSchemes.dark_tritanopia.colors.diffBlob.addition.fg',
            numBg:
              'colorSchemes.dark_tritanopia.colors.diffBlob.addition.numBg',
            lineBg:
              'colorSchemes.dark_tritanopia.colors.diffBlob.addition.lineBg',
            wordBg:
              'colorSchemes.dark_tritanopia.colors.diffBlob.addition.wordBg',
          },
          deletion: {
            numText:
              'colorSchemes.dark_tritanopia.colors.diffBlob.deletion.numText',
            fg: 'colorSchemes.dark_tritanopia.colors.diffBlob.deletion.fg',
            numBg:
              'colorSchemes.dark_tritanopia.colors.diffBlob.deletion.numBg',
            lineBg:
              'colorSchemes.dark_tritanopia.colors.diffBlob.deletion.lineBg',
            wordBg:
              'colorSchemes.dark_tritanopia.colors.diffBlob.deletion.wordBg',
          },
          hunk: {
            numBg: 'colorSchemes.dark_tritanopia.colors.diffBlob.hunk.numBg',
          },
          expander: {
            icon: 'colorSchemes.dark_tritanopia.colors.diffBlob.expander.icon',
          },
        },
        diffstat: {
          deletionBorder:
            'colorSchemes.dark_tritanopia.colors.diffstat.deletionBorder',
          additionBorder:
            'colorSchemes.dark_tritanopia.colors.diffstat.additionBorder',
          additionBg: 'colorSchemes.dark_tritanopia.colors.diffstat.additionBg',
        },
        searchKeyword: {
          hl: 'colorSchemes.dark_tritanopia.colors.searchKeyword.hl',
        },
        prettylights: {
          syntax: {
            comment:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.comment',
            constant:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.constant',
            entity:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.entity',
            storageModifierImport:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.storageModifierImport',
            entityTag:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.entityTag',
            keyword:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.keyword',
            string:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.string',
            variable:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.variable',
            brackethighlighterUnmatched:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.brackethighlighterUnmatched',
            invalidIllegalText:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.invalidIllegalText',
            invalidIllegalBg:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.invalidIllegalBg',
            carriageReturnText:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.carriageReturnText',
            carriageReturnBg:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.carriageReturnBg',
            stringRegexp:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.stringRegexp',
            markupList:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupList',
            markupHeading:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupHeading',
            markupItalic:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupItalic',
            markupBold:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupBold',
            markupDeletedText:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupDeletedText',
            markupDeletedBg:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupDeletedBg',
            markupInsertedText:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupInsertedText',
            markupInsertedBg:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupInsertedBg',
            markupChangedText:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupChangedText',
            markupChangedBg:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupChangedBg',
            markupIgnoredText:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupIgnoredText',
            markupIgnoredBg:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.markupIgnoredBg',
            metaDiffRange:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.metaDiffRange',
            brackethighlighterAngle:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.brackethighlighterAngle',
            sublimelinterGutterMark:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.sublimelinterGutterMark',
            constantOtherReferenceLink:
              'colorSchemes.dark_tritanopia.colors.prettylights.syntax.constantOtherReferenceLink',
          },
        },
        codemirror: {
          text: 'colorSchemes.dark_tritanopia.colors.codemirror.text',
          bg: 'colorSchemes.dark_tritanopia.colors.codemirror.bg',
          guttersBg: 'colorSchemes.dark_tritanopia.colors.codemirror.guttersBg',
          guttermarkerText:
            'colorSchemes.dark_tritanopia.colors.codemirror.guttermarkerText',
          guttermarkerSubtleText:
            'colorSchemes.dark_tritanopia.colors.codemirror.guttermarkerSubtleText',
          linenumberText:
            'colorSchemes.dark_tritanopia.colors.codemirror.linenumberText',
          cursor: 'colorSchemes.dark_tritanopia.colors.codemirror.cursor',
          selectionBg:
            'colorSchemes.dark_tritanopia.colors.codemirror.selectionBg',
          activelineBg:
            'colorSchemes.dark_tritanopia.colors.codemirror.activelineBg',
          matchingbracketText:
            'colorSchemes.dark_tritanopia.colors.codemirror.matchingbracketText',
          linesBg: 'colorSchemes.dark_tritanopia.colors.codemirror.linesBg',
          syntax: {
            comment:
              'colorSchemes.dark_tritanopia.colors.codemirror.syntax.comment',
            constant:
              'colorSchemes.dark_tritanopia.colors.codemirror.syntax.constant',
            entity:
              'colorSchemes.dark_tritanopia.colors.codemirror.syntax.entity',
            keyword:
              'colorSchemes.dark_tritanopia.colors.codemirror.syntax.keyword',
            storage:
              'colorSchemes.dark_tritanopia.colors.codemirror.syntax.storage',
            string:
              'colorSchemes.dark_tritanopia.colors.codemirror.syntax.string',
            support:
              'colorSchemes.dark_tritanopia.colors.codemirror.syntax.support',
            variable:
              'colorSchemes.dark_tritanopia.colors.codemirror.syntax.variable',
          },
        },
        checks: {
          bg: 'colorSchemes.dark_tritanopia.colors.checks.bg',
          textPrimary: 'colorSchemes.dark_tritanopia.colors.checks.textPrimary',
          textSecondary:
            'colorSchemes.dark_tritanopia.colors.checks.textSecondary',
          textLink: 'colorSchemes.dark_tritanopia.colors.checks.textLink',
          btnIcon: 'colorSchemes.dark_tritanopia.colors.checks.btnIcon',
          btnHoverIcon:
            'colorSchemes.dark_tritanopia.colors.checks.btnHoverIcon',
          btnHoverBg: 'colorSchemes.dark_tritanopia.colors.checks.btnHoverBg',
          inputText: 'colorSchemes.dark_tritanopia.colors.checks.inputText',
          inputPlaceholderText:
            'colorSchemes.dark_tritanopia.colors.checks.inputPlaceholderText',
          inputFocusText:
            'colorSchemes.dark_tritanopia.colors.checks.inputFocusText',
          inputBg: 'colorSchemes.dark_tritanopia.colors.checks.inputBg',
          donutError: 'colorSchemes.dark_tritanopia.colors.checks.donutError',
          donutPending:
            'colorSchemes.dark_tritanopia.colors.checks.donutPending',
          donutSuccess:
            'colorSchemes.dark_tritanopia.colors.checks.donutSuccess',
          donutNeutral:
            'colorSchemes.dark_tritanopia.colors.checks.donutNeutral',
          dropdownText:
            'colorSchemes.dark_tritanopia.colors.checks.dropdownText',
          dropdownBg: 'colorSchemes.dark_tritanopia.colors.checks.dropdownBg',
          dropdownBorder:
            'colorSchemes.dark_tritanopia.colors.checks.dropdownBorder',
          dropdownShadow:
            'colorSchemes.dark_tritanopia.colors.checks.dropdownShadow',
          dropdownHoverText:
            'colorSchemes.dark_tritanopia.colors.checks.dropdownHoverText',
          dropdownHoverBg:
            'colorSchemes.dark_tritanopia.colors.checks.dropdownHoverBg',
          dropdownBtnHoverText:
            'colorSchemes.dark_tritanopia.colors.checks.dropdownBtnHoverText',
          dropdownBtnHoverBg:
            'colorSchemes.dark_tritanopia.colors.checks.dropdownBtnHoverBg',
          scrollbarThumbBg:
            'colorSchemes.dark_tritanopia.colors.checks.scrollbarThumbBg',
          headerLabelText:
            'colorSchemes.dark_tritanopia.colors.checks.headerLabelText',
          headerLabelOpenText:
            'colorSchemes.dark_tritanopia.colors.checks.headerLabelOpenText',
          headerBorder:
            'colorSchemes.dark_tritanopia.colors.checks.headerBorder',
          headerIcon: 'colorSchemes.dark_tritanopia.colors.checks.headerIcon',
          lineText: 'colorSchemes.dark_tritanopia.colors.checks.lineText',
          lineNumText: 'colorSchemes.dark_tritanopia.colors.checks.lineNumText',
          lineTimestampText:
            'colorSchemes.dark_tritanopia.colors.checks.lineTimestampText',
          lineHoverBg: 'colorSchemes.dark_tritanopia.colors.checks.lineHoverBg',
          lineSelectedBg:
            'colorSchemes.dark_tritanopia.colors.checks.lineSelectedBg',
          lineSelectedNumText:
            'colorSchemes.dark_tritanopia.colors.checks.lineSelectedNumText',
          lineDtFmText:
            'colorSchemes.dark_tritanopia.colors.checks.lineDtFmText',
          lineDtFmBg: 'colorSchemes.dark_tritanopia.colors.checks.lineDtFmBg',
          gateBg: 'colorSchemes.dark_tritanopia.colors.checks.gateBg',
          gateText: 'colorSchemes.dark_tritanopia.colors.checks.gateText',
          gateWaitingText:
            'colorSchemes.dark_tritanopia.colors.checks.gateWaitingText',
          stepHeaderOpenBg:
            'colorSchemes.dark_tritanopia.colors.checks.stepHeaderOpenBg',
          stepErrorText:
            'colorSchemes.dark_tritanopia.colors.checks.stepErrorText',
          stepWarningText:
            'colorSchemes.dark_tritanopia.colors.checks.stepWarningText',
          loglineText: 'colorSchemes.dark_tritanopia.colors.checks.loglineText',
          loglineNumText:
            'colorSchemes.dark_tritanopia.colors.checks.loglineNumText',
          loglineDebugText:
            'colorSchemes.dark_tritanopia.colors.checks.loglineDebugText',
          loglineErrorText:
            'colorSchemes.dark_tritanopia.colors.checks.loglineErrorText',
          loglineErrorNumText:
            'colorSchemes.dark_tritanopia.colors.checks.loglineErrorNumText',
          loglineErrorBg:
            'colorSchemes.dark_tritanopia.colors.checks.loglineErrorBg',
          loglineWarningText:
            'colorSchemes.dark_tritanopia.colors.checks.loglineWarningText',
          loglineWarningNumText:
            'colorSchemes.dark_tritanopia.colors.checks.loglineWarningNumText',
          loglineWarningBg:
            'colorSchemes.dark_tritanopia.colors.checks.loglineWarningBg',
          loglineCommandText:
            'colorSchemes.dark_tritanopia.colors.checks.loglineCommandText',
          loglineSectionText:
            'colorSchemes.dark_tritanopia.colors.checks.loglineSectionText',
          ansi: {
            black: 'colorSchemes.dark_tritanopia.colors.checks.ansi.black',
            blackBright:
              'colorSchemes.dark_tritanopia.colors.checks.ansi.blackBright',
            white: 'colorSchemes.dark_tritanopia.colors.checks.ansi.white',
            whiteBright:
              'colorSchemes.dark_tritanopia.colors.checks.ansi.whiteBright',
            gray: 'colorSchemes.dark_tritanopia.colors.checks.ansi.gray',
            red: 'colorSchemes.dark_tritanopia.colors.checks.ansi.red',
            redBright:
              'colorSchemes.dark_tritanopia.colors.checks.ansi.redBright',
            green: 'colorSchemes.dark_tritanopia.colors.checks.ansi.green',
            greenBright:
              'colorSchemes.dark_tritanopia.colors.checks.ansi.greenBright',
            yellow: 'colorSchemes.dark_tritanopia.colors.checks.ansi.yellow',
            yellowBright:
              'colorSchemes.dark_tritanopia.colors.checks.ansi.yellowBright',
            blue: 'colorSchemes.dark_tritanopia.colors.checks.ansi.blue',
            blueBright:
              'colorSchemes.dark_tritanopia.colors.checks.ansi.blueBright',
            magenta: 'colorSchemes.dark_tritanopia.colors.checks.ansi.magenta',
            magentaBright:
              'colorSchemes.dark_tritanopia.colors.checks.ansi.magentaBright',
            cyan: 'colorSchemes.dark_tritanopia.colors.checks.ansi.cyan',
            cyanBright:
              'colorSchemes.dark_tritanopia.colors.checks.ansi.cyanBright',
          },
        },
        project: {
          headerBg: 'colorSchemes.dark_tritanopia.colors.project.headerBg',
          sidebarBg: 'colorSchemes.dark_tritanopia.colors.project.sidebarBg',
          gradientIn: 'colorSchemes.dark_tritanopia.colors.project.gradientIn',
          gradientOut:
            'colorSchemes.dark_tritanopia.colors.project.gradientOut',
        },
        mktg: {
          btn: {
            bg: 'colorSchemes.dark_tritanopia.colors.mktg.btn.bg',
          },
        },
        control: {
          borderColor: {
            emphasis:
              'colorSchemes.dark_tritanopia.colors.control.borderColor.emphasis',
          },
        },
        avatar: {
          bg: 'colorSchemes.dark_tritanopia.colors.avatar.bg',
          border: 'colorSchemes.dark_tritanopia.colors.avatar.border',
          stackFade: 'colorSchemes.dark_tritanopia.colors.avatar.stackFade',
          stackFadeMore:
            'colorSchemes.dark_tritanopia.colors.avatar.stackFadeMore',
        },
        topicTag: {
          border: 'colorSchemes.dark_tritanopia.colors.topicTag.border',
        },
        counter: {
          border: 'colorSchemes.dark_tritanopia.colors.counter.border',
        },
        selectMenu: {
          backdropBorder:
            'colorSchemes.dark_tritanopia.colors.selectMenu.backdropBorder',
          tapHighlight:
            'colorSchemes.dark_tritanopia.colors.selectMenu.tapHighlight',
          tapFocusBg:
            'colorSchemes.dark_tritanopia.colors.selectMenu.tapFocusBg',
        },
        header: {
          text: 'colorSchemes.dark_tritanopia.colors.header.text',
          bg: 'colorSchemes.dark_tritanopia.colors.header.bg',
          divider: 'colorSchemes.dark_tritanopia.colors.header.divider',
          logo: 'colorSchemes.dark_tritanopia.colors.header.logo',
        },
        headerSearch: {
          bg: 'colorSchemes.dark_tritanopia.colors.headerSearch.bg',
          border: 'colorSchemes.dark_tritanopia.colors.headerSearch.border',
        },
        sidenav: {
          selectedBg: 'colorSchemes.dark_tritanopia.colors.sidenav.selectedBg',
        },
        menu: {
          bgActive: 'colorSchemes.dark_tritanopia.colors.menu.bgActive',
        },
        input: {
          disabledBg: 'colorSchemes.dark_tritanopia.colors.input.disabledBg',
        },
        timeline: {
          badgeBg: 'colorSchemes.dark_tritanopia.colors.timeline.badgeBg',
        },
        ansi: {
          black: 'colorSchemes.dark_tritanopia.colors.ansi.black',
          blackBright: 'colorSchemes.dark_tritanopia.colors.ansi.blackBright',
          white: 'colorSchemes.dark_tritanopia.colors.ansi.white',
          whiteBright: 'colorSchemes.dark_tritanopia.colors.ansi.whiteBright',
          gray: 'colorSchemes.dark_tritanopia.colors.ansi.gray',
          red: 'colorSchemes.dark_tritanopia.colors.ansi.red',
          redBright: 'colorSchemes.dark_tritanopia.colors.ansi.redBright',
          green: 'colorSchemes.dark_tritanopia.colors.ansi.green',
          greenBright: 'colorSchemes.dark_tritanopia.colors.ansi.greenBright',
          yellow: 'colorSchemes.dark_tritanopia.colors.ansi.yellow',
          yellowBright: 'colorSchemes.dark_tritanopia.colors.ansi.yellowBright',
          blue: 'colorSchemes.dark_tritanopia.colors.ansi.blue',
          blueBright: 'colorSchemes.dark_tritanopia.colors.ansi.blueBright',
          magenta: 'colorSchemes.dark_tritanopia.colors.ansi.magenta',
          magentaBright:
            'colorSchemes.dark_tritanopia.colors.ansi.magentaBright',
          cyan: 'colorSchemes.dark_tritanopia.colors.ansi.cyan',
          cyanBright: 'colorSchemes.dark_tritanopia.colors.ansi.cyanBright',
        },
        btn: {
          text: 'colorSchemes.dark_tritanopia.colors.btn.text',
          bg: 'colorSchemes.dark_tritanopia.colors.btn.bg',
          border: 'colorSchemes.dark_tritanopia.colors.btn.border',
          hoverBg: 'colorSchemes.dark_tritanopia.colors.btn.hoverBg',
          hoverBorder: 'colorSchemes.dark_tritanopia.colors.btn.hoverBorder',
          activeBg: 'colorSchemes.dark_tritanopia.colors.btn.activeBg',
          activeBorder: 'colorSchemes.dark_tritanopia.colors.btn.activeBorder',
          selectedBg: 'colorSchemes.dark_tritanopia.colors.btn.selectedBg',
          counterBg: 'colorSchemes.dark_tritanopia.colors.btn.counterBg',
          primary: {
            text: 'colorSchemes.dark_tritanopia.colors.btn.primary.text',
            bg: 'colorSchemes.dark_tritanopia.colors.btn.primary.bg',
            border: 'colorSchemes.dark_tritanopia.colors.btn.primary.border',
            hoverBg: 'colorSchemes.dark_tritanopia.colors.btn.primary.hoverBg',
            hoverBorder:
              'colorSchemes.dark_tritanopia.colors.btn.primary.hoverBorder',
            selectedBg:
              'colorSchemes.dark_tritanopia.colors.btn.primary.selectedBg',
            disabledText:
              'colorSchemes.dark_tritanopia.colors.btn.primary.disabledText',
            disabledBg:
              'colorSchemes.dark_tritanopia.colors.btn.primary.disabledBg',
            disabledBorder:
              'colorSchemes.dark_tritanopia.colors.btn.primary.disabledBorder',
            icon: 'colorSchemes.dark_tritanopia.colors.btn.primary.icon',
            counterBg:
              'colorSchemes.dark_tritanopia.colors.btn.primary.counterBg',
          },
          outline: {
            text: 'colorSchemes.dark_tritanopia.colors.btn.outline.text',
            hoverText:
              'colorSchemes.dark_tritanopia.colors.btn.outline.hoverText',
            hoverBg: 'colorSchemes.dark_tritanopia.colors.btn.outline.hoverBg',
            hoverBorder:
              'colorSchemes.dark_tritanopia.colors.btn.outline.hoverBorder',
            hoverCounterBg:
              'colorSchemes.dark_tritanopia.colors.btn.outline.hoverCounterBg',
            selectedText:
              'colorSchemes.dark_tritanopia.colors.btn.outline.selectedText',
            selectedBg:
              'colorSchemes.dark_tritanopia.colors.btn.outline.selectedBg',
            selectedBorder:
              'colorSchemes.dark_tritanopia.colors.btn.outline.selectedBorder',
            disabledText:
              'colorSchemes.dark_tritanopia.colors.btn.outline.disabledText',
            disabledBg:
              'colorSchemes.dark_tritanopia.colors.btn.outline.disabledBg',
            disabledCounterBg:
              'colorSchemes.dark_tritanopia.colors.btn.outline.disabledCounterBg',
            counterBg:
              'colorSchemes.dark_tritanopia.colors.btn.outline.counterBg',
          },
          danger: {
            text: 'colorSchemes.dark_tritanopia.colors.btn.danger.text',
            hoverText:
              'colorSchemes.dark_tritanopia.colors.btn.danger.hoverText',
            hoverBg: 'colorSchemes.dark_tritanopia.colors.btn.danger.hoverBg',
            hoverBorder:
              'colorSchemes.dark_tritanopia.colors.btn.danger.hoverBorder',
            hoverIcon:
              'colorSchemes.dark_tritanopia.colors.btn.danger.hoverIcon',
            hoverCounterBg:
              'colorSchemes.dark_tritanopia.colors.btn.danger.hoverCounterBg',
            selectedText:
              'colorSchemes.dark_tritanopia.colors.btn.danger.selectedText',
            selectedBg:
              'colorSchemes.dark_tritanopia.colors.btn.danger.selectedBg',
            selectedBorder:
              'colorSchemes.dark_tritanopia.colors.btn.danger.selectedBorder',
            disabledText:
              'colorSchemes.dark_tritanopia.colors.btn.danger.disabledText',
            disabledBg:
              'colorSchemes.dark_tritanopia.colors.btn.danger.disabledBg',
            disabledCounterBg:
              'colorSchemes.dark_tritanopia.colors.btn.danger.disabledCounterBg',
            counterBg:
              'colorSchemes.dark_tritanopia.colors.btn.danger.counterBg',
            icon: 'colorSchemes.dark_tritanopia.colors.btn.danger.icon',
          },
        },
        underlinenav: {
          icon: 'colorSchemes.dark_tritanopia.colors.underlinenav.icon',
          borderHover:
            'colorSchemes.dark_tritanopia.colors.underlinenav.borderHover',
        },
        actionListItem: {
          inlineDivider:
            'colorSchemes.dark_tritanopia.colors.actionListItem.inlineDivider',
          default: {
            hoverBg:
              'colorSchemes.dark_tritanopia.colors.actionListItem.default.hoverBg',
            hoverBorder:
              'colorSchemes.dark_tritanopia.colors.actionListItem.default.hoverBorder',
            activeBg:
              'colorSchemes.dark_tritanopia.colors.actionListItem.default.activeBg',
            activeBorder:
              'colorSchemes.dark_tritanopia.colors.actionListItem.default.activeBorder',
            selectedBg:
              'colorSchemes.dark_tritanopia.colors.actionListItem.default.selectedBg',
          },
          danger: {
            hoverBg:
              'colorSchemes.dark_tritanopia.colors.actionListItem.danger.hoverBg',
            activeBg:
              'colorSchemes.dark_tritanopia.colors.actionListItem.danger.activeBg',
            hoverText:
              'colorSchemes.dark_tritanopia.colors.actionListItem.danger.hoverText',
          },
        },
        switchTrack: {
          bg: 'colorSchemes.dark_tritanopia.colors.switchTrack.bg',
          hoverBg: 'colorSchemes.dark_tritanopia.colors.switchTrack.hoverBg',
          activeBg: 'colorSchemes.dark_tritanopia.colors.switchTrack.activeBg',
          disabledBg:
            'colorSchemes.dark_tritanopia.colors.switchTrack.disabledBg',
          fg: 'colorSchemes.dark_tritanopia.colors.switchTrack.fg',
          disabledFg:
            'colorSchemes.dark_tritanopia.colors.switchTrack.disabledFg',
          border: 'colorSchemes.dark_tritanopia.colors.switchTrack.border',
          checked: {
            bg: 'colorSchemes.dark_tritanopia.colors.switchTrack.checked.bg',
            hoverBg:
              'colorSchemes.dark_tritanopia.colors.switchTrack.checked.hoverBg',
            activeBg:
              'colorSchemes.dark_tritanopia.colors.switchTrack.checked.activeBg',
            fg: 'colorSchemes.dark_tritanopia.colors.switchTrack.checked.fg',
            disabledFg:
              'colorSchemes.dark_tritanopia.colors.switchTrack.checked.disabledFg',
            border:
              'colorSchemes.dark_tritanopia.colors.switchTrack.checked.border',
          },
        },
        switchKnob: {
          bg: 'colorSchemes.dark_tritanopia.colors.switchKnob.bg',
          border: 'colorSchemes.dark_tritanopia.colors.switchKnob.border',
          disabledBg:
            'colorSchemes.dark_tritanopia.colors.switchKnob.disabledBg',
          checked: {
            bg: 'colorSchemes.dark_tritanopia.colors.switchKnob.checked.bg',
            disabledBg:
              'colorSchemes.dark_tritanopia.colors.switchKnob.checked.disabledBg',
            border:
              'colorSchemes.dark_tritanopia.colors.switchKnob.checked.border',
          },
        },
        segmentedControl: {
          bg: 'colorSchemes.dark_tritanopia.colors.segmentedControl.bg',
          button: {
            bg: 'colorSchemes.dark_tritanopia.colors.segmentedControl.button.bg',
            hover: {
              bg: 'colorSchemes.dark_tritanopia.colors.segmentedControl.button.hover.bg',
            },
            active: {
              bg: 'colorSchemes.dark_tritanopia.colors.segmentedControl.button.active.bg',
            },
            selected: {
              border:
                'colorSchemes.dark_tritanopia.colors.segmentedControl.button.selected.border',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg:
              'colorSchemes.dark_tritanopia.colors.treeViewItem.chevron.hoverBg',
          },
          directory: {
            fill: 'colorSchemes.dark_tritanopia.colors.treeViewItem.directory.fill',
          },
        },
        fg: {
          default: 'colorSchemes.dark_tritanopia.colors.fg.default',
          muted: 'colorSchemes.dark_tritanopia.colors.fg.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.fg.subtle',
          onEmphasis: 'colorSchemes.dark_tritanopia.colors.fg.onEmphasis',
        },
        canvas: {
          default: 'colorSchemes.dark_tritanopia.colors.canvas.default',
          overlay: 'colorSchemes.dark_tritanopia.colors.canvas.overlay',
          inset: 'colorSchemes.dark_tritanopia.colors.canvas.inset',
          subtle: 'colorSchemes.dark_tritanopia.colors.canvas.subtle',
        },
        border: {
          default: 'colorSchemes.dark_tritanopia.colors.border.default',
          muted: 'colorSchemes.dark_tritanopia.colors.border.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.border.subtle',
        },
        neutral: {
          emphasisPlus:
            'colorSchemes.dark_tritanopia.colors.neutral.emphasisPlus',
          emphasis: 'colorSchemes.dark_tritanopia.colors.neutral.emphasis',
          muted: 'colorSchemes.dark_tritanopia.colors.neutral.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.neutral.subtle',
        },
        accent: {
          fg: 'colorSchemes.dark_tritanopia.colors.accent.fg',
          emphasis: 'colorSchemes.dark_tritanopia.colors.accent.emphasis',
          muted: 'colorSchemes.dark_tritanopia.colors.accent.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.accent.subtle',
        },
        success: {
          fg: 'colorSchemes.dark_tritanopia.colors.success.fg',
          emphasis: 'colorSchemes.dark_tritanopia.colors.success.emphasis',
          muted: 'colorSchemes.dark_tritanopia.colors.success.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.success.subtle',
        },
        attention: {
          fg: 'colorSchemes.dark_tritanopia.colors.attention.fg',
          emphasis: 'colorSchemes.dark_tritanopia.colors.attention.emphasis',
          muted: 'colorSchemes.dark_tritanopia.colors.attention.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.attention.subtle',
        },
        severe: {
          fg: 'colorSchemes.dark_tritanopia.colors.severe.fg',
          emphasis: 'colorSchemes.dark_tritanopia.colors.severe.emphasis',
          muted: 'colorSchemes.dark_tritanopia.colors.severe.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.severe.subtle',
        },
        danger: {
          fg: 'colorSchemes.dark_tritanopia.colors.danger.fg',
          emphasis: 'colorSchemes.dark_tritanopia.colors.danger.emphasis',
          muted: 'colorSchemes.dark_tritanopia.colors.danger.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.danger.subtle',
        },
        open: {
          fg: 'colorSchemes.dark_tritanopia.colors.open.fg',
          emphasis: 'colorSchemes.dark_tritanopia.colors.open.emphasis',
          muted: 'colorSchemes.dark_tritanopia.colors.open.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.open.subtle',
        },
        closed: {
          fg: 'colorSchemes.dark_tritanopia.colors.closed.fg',
          emphasis: 'colorSchemes.dark_tritanopia.colors.closed.emphasis',
          muted: 'colorSchemes.dark_tritanopia.colors.closed.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.closed.subtle',
        },
        done: {
          fg: 'colorSchemes.dark_tritanopia.colors.done.fg',
          emphasis: 'colorSchemes.dark_tritanopia.colors.done.emphasis',
          muted: 'colorSchemes.dark_tritanopia.colors.done.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.done.subtle',
        },
        sponsors: {
          fg: 'colorSchemes.dark_tritanopia.colors.sponsors.fg',
          emphasis: 'colorSchemes.dark_tritanopia.colors.sponsors.emphasis',
          muted: 'colorSchemes.dark_tritanopia.colors.sponsors.muted',
          subtle: 'colorSchemes.dark_tritanopia.colors.sponsors.subtle',
        },
        primer: {
          fg: {
            disabled: 'colorSchemes.dark_tritanopia.colors.primer.fg.disabled',
          },
          canvas: {
            backdrop:
              'colorSchemes.dark_tritanopia.colors.primer.canvas.backdrop',
            sticky: 'colorSchemes.dark_tritanopia.colors.primer.canvas.sticky',
          },
          border: {
            active: 'colorSchemes.dark_tritanopia.colors.primer.border.active',
            contrast:
              'colorSchemes.dark_tritanopia.colors.primer.border.contrast',
          },
        },
      },
      shadows: {
        checks: {
          inputShadow:
            'colorSchemes.dark_tritanopia.shadows.checks.inputShadow',
        },
        mktg: {
          btn: {
            shadow: {
              outline:
                'colorSchemes.dark_tritanopia.shadows.mktg.btn.shadow.outline',
              focus:
                'colorSchemes.dark_tritanopia.shadows.mktg.btn.shadow.focus',
              hover:
                'colorSchemes.dark_tritanopia.shadows.mktg.btn.shadow.hover',
              hoverMuted:
                'colorSchemes.dark_tritanopia.shadows.mktg.btn.shadow.hoverMuted',
            },
          },
        },
        avatar: {
          childShadow:
            'colorSchemes.dark_tritanopia.shadows.avatar.childShadow',
        },
        overlay: {
          shadow: 'colorSchemes.dark_tritanopia.shadows.overlay.shadow',
        },
        btn: {
          shadow: 'colorSchemes.dark_tritanopia.shadows.btn.shadow',
          insetShadow: 'colorSchemes.dark_tritanopia.shadows.btn.insetShadow',
          primary: {
            shadow: 'colorSchemes.dark_tritanopia.shadows.btn.primary.shadow',
            insetShadow:
              'colorSchemes.dark_tritanopia.shadows.btn.primary.insetShadow',
            selectedShadow:
              'colorSchemes.dark_tritanopia.shadows.btn.primary.selectedShadow',
          },
          outline: {
            hoverShadow:
              'colorSchemes.dark_tritanopia.shadows.btn.outline.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.dark_tritanopia.shadows.btn.outline.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.dark_tritanopia.shadows.btn.outline.selectedShadow',
          },
          danger: {
            hoverShadow:
              'colorSchemes.dark_tritanopia.shadows.btn.danger.hoverShadow',
            hoverInsetShadow:
              'colorSchemes.dark_tritanopia.shadows.btn.danger.hoverInsetShadow',
            selectedShadow:
              'colorSchemes.dark_tritanopia.shadows.btn.danger.selectedShadow',
          },
        },
        shadow: {
          small: 'colorSchemes.dark_tritanopia.shadows.shadow.small',
          medium: 'colorSchemes.dark_tritanopia.shadows.shadow.medium',
          large: 'colorSchemes.dark_tritanopia.shadows.shadow.large',
          extraLarge: 'colorSchemes.dark_tritanopia.shadows.shadow.extraLarge',
        },
        primer: {
          shadow: {
            highlight:
              'colorSchemes.dark_tritanopia.shadows.primer.shadow.highlight',
            inset: 'colorSchemes.dark_tritanopia.shadows.primer.shadow.inset',
          },
        },
      },
    },
  },
  colors: {
    canvasDefaultTransparent: 'colors.canvasDefaultTransparent',
    pageHeaderBg: 'colors.pageHeaderBg',
    marketingIcon: {
      primary: 'colors.marketingIcon.primary',
      secondary: 'colors.marketingIcon.secondary',
    },
    diffBlob: {
      addition: {
        numText: 'colors.diffBlob.addition.numText',
        fg: 'colors.diffBlob.addition.fg',
        numBg: 'colors.diffBlob.addition.numBg',
        lineBg: 'colors.diffBlob.addition.lineBg',
        wordBg: 'colors.diffBlob.addition.wordBg',
      },
      deletion: {
        numText: 'colors.diffBlob.deletion.numText',
        fg: 'colors.diffBlob.deletion.fg',
        numBg: 'colors.diffBlob.deletion.numBg',
        lineBg: 'colors.diffBlob.deletion.lineBg',
        wordBg: 'colors.diffBlob.deletion.wordBg',
      },
      hunk: {
        numBg: 'colors.diffBlob.hunk.numBg',
      },
      expander: {
        icon: 'colors.diffBlob.expander.icon',
      },
    },
    diffstat: {
      deletionBorder: 'colors.diffstat.deletionBorder',
      additionBorder: 'colors.diffstat.additionBorder',
      additionBg: 'colors.diffstat.additionBg',
    },
    searchKeyword: {
      hl: 'colors.searchKeyword.hl',
    },
    prettylights: {
      syntax: {
        comment: 'colors.prettylights.syntax.comment',
        constant: 'colors.prettylights.syntax.constant',
        entity: 'colors.prettylights.syntax.entity',
        storageModifierImport:
          'colors.prettylights.syntax.storageModifierImport',
        entityTag: 'colors.prettylights.syntax.entityTag',
        keyword: 'colors.prettylights.syntax.keyword',
        string: 'colors.prettylights.syntax.string',
        variable: 'colors.prettylights.syntax.variable',
        brackethighlighterUnmatched:
          'colors.prettylights.syntax.brackethighlighterUnmatched',
        invalidIllegalText: 'colors.prettylights.syntax.invalidIllegalText',
        invalidIllegalBg: 'colors.prettylights.syntax.invalidIllegalBg',
        carriageReturnText: 'colors.prettylights.syntax.carriageReturnText',
        carriageReturnBg: 'colors.prettylights.syntax.carriageReturnBg',
        stringRegexp: 'colors.prettylights.syntax.stringRegexp',
        markupList: 'colors.prettylights.syntax.markupList',
        markupHeading: 'colors.prettylights.syntax.markupHeading',
        markupItalic: 'colors.prettylights.syntax.markupItalic',
        markupBold: 'colors.prettylights.syntax.markupBold',
        markupDeletedText: 'colors.prettylights.syntax.markupDeletedText',
        markupDeletedBg: 'colors.prettylights.syntax.markupDeletedBg',
        markupInsertedText: 'colors.prettylights.syntax.markupInsertedText',
        markupInsertedBg: 'colors.prettylights.syntax.markupInsertedBg',
        markupChangedText: 'colors.prettylights.syntax.markupChangedText',
        markupChangedBg: 'colors.prettylights.syntax.markupChangedBg',
        markupIgnoredText: 'colors.prettylights.syntax.markupIgnoredText',
        markupIgnoredBg: 'colors.prettylights.syntax.markupIgnoredBg',
        metaDiffRange: 'colors.prettylights.syntax.metaDiffRange',
        brackethighlighterAngle:
          'colors.prettylights.syntax.brackethighlighterAngle',
        sublimelinterGutterMark:
          'colors.prettylights.syntax.sublimelinterGutterMark',
        constantOtherReferenceLink:
          'colors.prettylights.syntax.constantOtherReferenceLink',
      },
    },
    codemirror: {
      text: 'colors.codemirror.text',
      bg: 'colors.codemirror.bg',
      guttersBg: 'colors.codemirror.guttersBg',
      guttermarkerText: 'colors.codemirror.guttermarkerText',
      guttermarkerSubtleText: 'colors.codemirror.guttermarkerSubtleText',
      linenumberText: 'colors.codemirror.linenumberText',
      cursor: 'colors.codemirror.cursor',
      selectionBg: 'colors.codemirror.selectionBg',
      activelineBg: 'colors.codemirror.activelineBg',
      matchingbracketText: 'colors.codemirror.matchingbracketText',
      linesBg: 'colors.codemirror.linesBg',
      syntax: {
        comment: 'colors.codemirror.syntax.comment',
        constant: 'colors.codemirror.syntax.constant',
        entity: 'colors.codemirror.syntax.entity',
        keyword: 'colors.codemirror.syntax.keyword',
        storage: 'colors.codemirror.syntax.storage',
        string: 'colors.codemirror.syntax.string',
        support: 'colors.codemirror.syntax.support',
        variable: 'colors.codemirror.syntax.variable',
      },
    },
    checks: {
      bg: 'colors.checks.bg',
      textPrimary: 'colors.checks.textPrimary',
      textSecondary: 'colors.checks.textSecondary',
      textLink: 'colors.checks.textLink',
      btnIcon: 'colors.checks.btnIcon',
      btnHoverIcon: 'colors.checks.btnHoverIcon',
      btnHoverBg: 'colors.checks.btnHoverBg',
      inputText: 'colors.checks.inputText',
      inputPlaceholderText: 'colors.checks.inputPlaceholderText',
      inputFocusText: 'colors.checks.inputFocusText',
      inputBg: 'colors.checks.inputBg',
      donutError: 'colors.checks.donutError',
      donutPending: 'colors.checks.donutPending',
      donutSuccess: 'colors.checks.donutSuccess',
      donutNeutral: 'colors.checks.donutNeutral',
      dropdownText: 'colors.checks.dropdownText',
      dropdownBg: 'colors.checks.dropdownBg',
      dropdownBorder: 'colors.checks.dropdownBorder',
      dropdownShadow: 'colors.checks.dropdownShadow',
      dropdownHoverText: 'colors.checks.dropdownHoverText',
      dropdownHoverBg: 'colors.checks.dropdownHoverBg',
      dropdownBtnHoverText: 'colors.checks.dropdownBtnHoverText',
      dropdownBtnHoverBg: 'colors.checks.dropdownBtnHoverBg',
      scrollbarThumbBg: 'colors.checks.scrollbarThumbBg',
      headerLabelText: 'colors.checks.headerLabelText',
      headerLabelOpenText: 'colors.checks.headerLabelOpenText',
      headerBorder: 'colors.checks.headerBorder',
      headerIcon: 'colors.checks.headerIcon',
      lineText: 'colors.checks.lineText',
      lineNumText: 'colors.checks.lineNumText',
      lineTimestampText: 'colors.checks.lineTimestampText',
      lineHoverBg: 'colors.checks.lineHoverBg',
      lineSelectedBg: 'colors.checks.lineSelectedBg',
      lineSelectedNumText: 'colors.checks.lineSelectedNumText',
      lineDtFmText: 'colors.checks.lineDtFmText',
      lineDtFmBg: 'colors.checks.lineDtFmBg',
      gateBg: 'colors.checks.gateBg',
      gateText: 'colors.checks.gateText',
      gateWaitingText: 'colors.checks.gateWaitingText',
      stepHeaderOpenBg: 'colors.checks.stepHeaderOpenBg',
      stepErrorText: 'colors.checks.stepErrorText',
      stepWarningText: 'colors.checks.stepWarningText',
      loglineText: 'colors.checks.loglineText',
      loglineNumText: 'colors.checks.loglineNumText',
      loglineDebugText: 'colors.checks.loglineDebugText',
      loglineErrorText: 'colors.checks.loglineErrorText',
      loglineErrorNumText: 'colors.checks.loglineErrorNumText',
      loglineErrorBg: 'colors.checks.loglineErrorBg',
      loglineWarningText: 'colors.checks.loglineWarningText',
      loglineWarningNumText: 'colors.checks.loglineWarningNumText',
      loglineWarningBg: 'colors.checks.loglineWarningBg',
      loglineCommandText: 'colors.checks.loglineCommandText',
      loglineSectionText: 'colors.checks.loglineSectionText',
      ansi: {
        black: 'colors.checks.ansi.black',
        blackBright: 'colors.checks.ansi.blackBright',
        white: 'colors.checks.ansi.white',
        whiteBright: 'colors.checks.ansi.whiteBright',
        gray: 'colors.checks.ansi.gray',
        red: 'colors.checks.ansi.red',
        redBright: 'colors.checks.ansi.redBright',
        green: 'colors.checks.ansi.green',
        greenBright: 'colors.checks.ansi.greenBright',
        yellow: 'colors.checks.ansi.yellow',
        yellowBright: 'colors.checks.ansi.yellowBright',
        blue: 'colors.checks.ansi.blue',
        blueBright: 'colors.checks.ansi.blueBright',
        magenta: 'colors.checks.ansi.magenta',
        magentaBright: 'colors.checks.ansi.magentaBright',
        cyan: 'colors.checks.ansi.cyan',
        cyanBright: 'colors.checks.ansi.cyanBright',
      },
    },
    project: {
      headerBg: 'colors.project.headerBg',
      sidebarBg: 'colors.project.sidebarBg',
      gradientIn: 'colors.project.gradientIn',
      gradientOut: 'colors.project.gradientOut',
    },
    mktg: {
      btn: {
        bg: 'colors.mktg.btn.bg',
      },
    },
    control: {
      borderColor: {
        emphasis: 'colors.control.borderColor.emphasis',
      },
    },
    avatar: {
      bg: 'colors.avatar.bg',
      border: 'colors.avatar.border',
      stackFade: 'colors.avatar.stackFade',
      stackFadeMore: 'colors.avatar.stackFadeMore',
    },
    topicTag: {
      border: 'colors.topicTag.border',
    },
    counter: {
      border: 'colors.counter.border',
    },
    selectMenu: {
      backdropBorder: 'colors.selectMenu.backdropBorder',
      tapHighlight: 'colors.selectMenu.tapHighlight',
      tapFocusBg: 'colors.selectMenu.tapFocusBg',
    },
    header: {
      text: 'colors.header.text',
      bg: 'colors.header.bg',
      divider: 'colors.header.divider',
      logo: 'colors.header.logo',
    },
    headerSearch: {
      bg: 'colors.headerSearch.bg',
      border: 'colors.headerSearch.border',
    },
    sidenav: {
      selectedBg: 'colors.sidenav.selectedBg',
    },
    menu: {
      bgActive: 'colors.menu.bgActive',
    },
    input: {
      disabledBg: 'colors.input.disabledBg',
    },
    timeline: {
      badgeBg: 'colors.timeline.badgeBg',
    },
    ansi: {
      black: 'colors.ansi.black',
      blackBright: 'colors.ansi.blackBright',
      white: 'colors.ansi.white',
      whiteBright: 'colors.ansi.whiteBright',
      gray: 'colors.ansi.gray',
      red: 'colors.ansi.red',
      redBright: 'colors.ansi.redBright',
      green: 'colors.ansi.green',
      greenBright: 'colors.ansi.greenBright',
      yellow: 'colors.ansi.yellow',
      yellowBright: 'colors.ansi.yellowBright',
      blue: 'colors.ansi.blue',
      blueBright: 'colors.ansi.blueBright',
      magenta: 'colors.ansi.magenta',
      magentaBright: 'colors.ansi.magentaBright',
      cyan: 'colors.ansi.cyan',
      cyanBright: 'colors.ansi.cyanBright',
    },
    btn: {
      text: 'colors.btn.text',
      bg: 'colors.btn.bg',
      border: 'colors.btn.border',
      hoverBg: 'colors.btn.hoverBg',
      hoverBorder: 'colors.btn.hoverBorder',
      activeBg: 'colors.btn.activeBg',
      activeBorder: 'colors.btn.activeBorder',
      selectedBg: 'colors.btn.selectedBg',
      counterBg: 'colors.btn.counterBg',
      primary: {
        text: 'colors.btn.primary.text',
        bg: 'colors.btn.primary.bg',
        border: 'colors.btn.primary.border',
        hoverBg: 'colors.btn.primary.hoverBg',
        hoverBorder: 'colors.btn.primary.hoverBorder',
        selectedBg: 'colors.btn.primary.selectedBg',
        disabledText: 'colors.btn.primary.disabledText',
        disabledBg: 'colors.btn.primary.disabledBg',
        disabledBorder: 'colors.btn.primary.disabledBorder',
        icon: 'colors.btn.primary.icon',
        counterBg: 'colors.btn.primary.counterBg',
      },
      outline: {
        text: 'colors.btn.outline.text',
        hoverText: 'colors.btn.outline.hoverText',
        hoverBg: 'colors.btn.outline.hoverBg',
        hoverBorder: 'colors.btn.outline.hoverBorder',
        hoverCounterBg: 'colors.btn.outline.hoverCounterBg',
        selectedText: 'colors.btn.outline.selectedText',
        selectedBg: 'colors.btn.outline.selectedBg',
        selectedBorder: 'colors.btn.outline.selectedBorder',
        disabledText: 'colors.btn.outline.disabledText',
        disabledBg: 'colors.btn.outline.disabledBg',
        disabledCounterBg: 'colors.btn.outline.disabledCounterBg',
        counterBg: 'colors.btn.outline.counterBg',
      },
      danger: {
        text: 'colors.btn.danger.text',
        hoverText: 'colors.btn.danger.hoverText',
        hoverBg: 'colors.btn.danger.hoverBg',
        hoverBorder: 'colors.btn.danger.hoverBorder',
        hoverIcon: 'colors.btn.danger.hoverIcon',
        hoverCounterBg: 'colors.btn.danger.hoverCounterBg',
        selectedText: 'colors.btn.danger.selectedText',
        selectedBg: 'colors.btn.danger.selectedBg',
        selectedBorder: 'colors.btn.danger.selectedBorder',
        disabledText: 'colors.btn.danger.disabledText',
        disabledBg: 'colors.btn.danger.disabledBg',
        disabledCounterBg: 'colors.btn.danger.disabledCounterBg',
        counterBg: 'colors.btn.danger.counterBg',
        icon: 'colors.btn.danger.icon',
      },
    },
    underlinenav: {
      icon: 'colors.underlinenav.icon',
      borderHover: 'colors.underlinenav.borderHover',
    },
    actionListItem: {
      inlineDivider: 'colors.actionListItem.inlineDivider',
      default: {
        hoverBg: 'colors.actionListItem.default.hoverBg',
        hoverBorder: 'colors.actionListItem.default.hoverBorder',
        activeBg: 'colors.actionListItem.default.activeBg',
        activeBorder: 'colors.actionListItem.default.activeBorder',
        selectedBg: 'colors.actionListItem.default.selectedBg',
      },
      danger: {
        hoverBg: 'colors.actionListItem.danger.hoverBg',
        activeBg: 'colors.actionListItem.danger.activeBg',
        hoverText: 'colors.actionListItem.danger.hoverText',
      },
    },
    switchTrack: {
      bg: 'colors.switchTrack.bg',
      hoverBg: 'colors.switchTrack.hoverBg',
      activeBg: 'colors.switchTrack.activeBg',
      disabledBg: 'colors.switchTrack.disabledBg',
      fg: 'colors.switchTrack.fg',
      disabledFg: 'colors.switchTrack.disabledFg',
      border: 'colors.switchTrack.border',
      checked: {
        bg: 'colors.switchTrack.checked.bg',
        hoverBg: 'colors.switchTrack.checked.hoverBg',
        activeBg: 'colors.switchTrack.checked.activeBg',
        fg: 'colors.switchTrack.checked.fg',
        disabledFg: 'colors.switchTrack.checked.disabledFg',
        border: 'colors.switchTrack.checked.border',
      },
    },
    switchKnob: {
      bg: 'colors.switchKnob.bg',
      border: 'colors.switchKnob.border',
      disabledBg: 'colors.switchKnob.disabledBg',
      checked: {
        bg: 'colors.switchKnob.checked.bg',
        disabledBg: 'colors.switchKnob.checked.disabledBg',
        border: 'colors.switchKnob.checked.border',
      },
    },
    segmentedControl: {
      bg: 'colors.segmentedControl.bg',
      button: {
        bg: 'colors.segmentedControl.button.bg',
        hover: {
          bg: 'colors.segmentedControl.button.hover.bg',
        },
        active: {
          bg: 'colors.segmentedControl.button.active.bg',
        },
        selected: {
          border: 'colors.segmentedControl.button.selected.border',
        },
      },
    },
    treeViewItem: {
      chevron: {
        hoverBg: 'colors.treeViewItem.chevron.hoverBg',
      },
      directory: {
        fill: 'colors.treeViewItem.directory.fill',
      },
    },
    fg: {
      default: 'colors.fg.default',
      muted: 'colors.fg.muted',
      subtle: 'colors.fg.subtle',
      onEmphasis: 'colors.fg.onEmphasis',
    },
    canvas: {
      default: 'colors.canvas.default',
      overlay: 'colors.canvas.overlay',
      inset: 'colors.canvas.inset',
      subtle: 'colors.canvas.subtle',
    },
    border: {
      default: 'colors.border.default',
      muted: 'colors.border.muted',
      subtle: 'colors.border.subtle',
    },
    neutral: {
      emphasisPlus: 'colors.neutral.emphasisPlus',
      emphasis: 'colors.neutral.emphasis',
      muted: 'colors.neutral.muted',
      subtle: 'colors.neutral.subtle',
    },
    accent: {
      fg: 'colors.accent.fg',
      emphasis: 'colors.accent.emphasis',
      muted: 'colors.accent.muted',
      subtle: 'colors.accent.subtle',
    },
    success: {
      fg: 'colors.success.fg',
      emphasis: 'colors.success.emphasis',
      muted: 'colors.success.muted',
      subtle: 'colors.success.subtle',
    },
    attention: {
      fg: 'colors.attention.fg',
      emphasis: 'colors.attention.emphasis',
      muted: 'colors.attention.muted',
      subtle: 'colors.attention.subtle',
    },
    severe: {
      fg: 'colors.severe.fg',
      emphasis: 'colors.severe.emphasis',
      muted: 'colors.severe.muted',
      subtle: 'colors.severe.subtle',
    },
    danger: {
      fg: 'colors.danger.fg',
      emphasis: 'colors.danger.emphasis',
      muted: 'colors.danger.muted',
      subtle: 'colors.danger.subtle',
    },
    open: {
      fg: 'colors.open.fg',
      emphasis: 'colors.open.emphasis',
      muted: 'colors.open.muted',
      subtle: 'colors.open.subtle',
    },
    closed: {
      fg: 'colors.closed.fg',
      emphasis: 'colors.closed.emphasis',
      muted: 'colors.closed.muted',
      subtle: 'colors.closed.subtle',
    },
    done: {
      fg: 'colors.done.fg',
      emphasis: 'colors.done.emphasis',
      muted: 'colors.done.muted',
      subtle: 'colors.done.subtle',
    },
    sponsors: {
      fg: 'colors.sponsors.fg',
      emphasis: 'colors.sponsors.emphasis',
      muted: 'colors.sponsors.muted',
      subtle: 'colors.sponsors.subtle',
    },
    primer: {
      fg: {
        disabled: 'colors.primer.fg.disabled',
      },
      canvas: {
        backdrop: 'colors.primer.canvas.backdrop',
        sticky: 'colors.primer.canvas.sticky',
      },
      border: {
        active: 'colors.primer.border.active',
        contrast: 'colors.primer.border.contrast',
      },
    },
  },
  shadows: {
    checks: {
      inputShadow: 'shadows.checks.inputShadow',
    },
    mktg: {
      btn: {
        shadow: {
          outline: 'shadows.mktg.btn.shadow.outline',
          focus: 'shadows.mktg.btn.shadow.focus',
          hover: 'shadows.mktg.btn.shadow.hover',
          hoverMuted: 'shadows.mktg.btn.shadow.hoverMuted',
        },
      },
    },
    avatar: {
      childShadow: 'shadows.avatar.childShadow',
    },
    overlay: {
      shadow: 'shadows.overlay.shadow',
    },
    btn: {
      shadow: 'shadows.btn.shadow',
      insetShadow: 'shadows.btn.insetShadow',
      primary: {
        shadow: 'shadows.btn.primary.shadow',
        insetShadow: 'shadows.btn.primary.insetShadow',
        selectedShadow: 'shadows.btn.primary.selectedShadow',
      },
      outline: {
        hoverShadow: 'shadows.btn.outline.hoverShadow',
        hoverInsetShadow: 'shadows.btn.outline.hoverInsetShadow',
        selectedShadow: 'shadows.btn.outline.selectedShadow',
      },
      danger: {
        hoverShadow: 'shadows.btn.danger.hoverShadow',
        hoverInsetShadow: 'shadows.btn.danger.hoverInsetShadow',
        selectedShadow: 'shadows.btn.danger.selectedShadow',
      },
    },
    shadow: {
      small: 'shadows.shadow.small',
      medium: 'shadows.shadow.medium',
      large: 'shadows.shadow.large',
      extraLarge: 'shadows.shadow.extraLarge',
    },
    primer: {
      shadow: {
        highlight: 'shadows.primer.shadow.highlight',
        inset: 'shadows.primer.shadow.inset',
      },
    },
  },
};

/**
 * convert primer theme object to the handy object above
 * @param obj primer's theme object obtained from useTheme
 * @param acc accumulated final value
 * @returns converted object above
 */
const convert = (obj: any[], acc: string) => {
  if (Array.isArray(obj)) {
    const newobj = {};
    obj.map((_, index) => {
      Object.assign(newobj, { [index]: `${acc}.${index}` });
    });
    return newobj;
  }
  if (typeof obj === 'string' || typeof obj === 'number') {
    return acc;
  }
  const newobj = {};
  Object.keys(obj).forEach((key) => {
    Object.assign(newobj, {
      [key]: convert(obj[key], `${acc}${acc ? '.' : ''}${key}`),
    });
  });
  return newobj;
};
