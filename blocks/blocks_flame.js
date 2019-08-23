Blockly.Blocks["flame_block"] = {
    init: function() {
      this.appendDummyInput().appendField("IR FLAME");
      this.appendValueInput("ANALOG_PIN")
        .setCheck("Number")
        .appendField("ANALOG PIN");
      this.appendDummyInput()
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("IR_FRAME_ANALOG"),
          "IR_FRAME_ANALOG"
        );
      this.appendValueInput("DIGITAL_PIN")
        .setCheck("Number")
        .appendField("DIGITAL PIN");
      this.appendDummyInput()
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("IR_FRAME_DIGITAL"),
          "IR_FRAME_DIGITAL"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };