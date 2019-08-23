Blockly.JavaScript["flame_block"] = function(block) {
    var value_analog_pin = Blockly.JavaScript.valueToCode(
      block,
      "ANALOG_PIN",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var variable_ir_frame_analog = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("IR_FRAME_ANALOG"),
      Blockly.Variables.NAME_TYPE
    );
    var value_digital_pin = Blockly.JavaScript.valueToCode(
      block,
      "DIGITAL_PIN",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var variable_ir_frame_digital = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("IR_FRAME_DIGITAL"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	${variable_ir_frame_analog} = analogRead(${value_analog_pin});
	${variable_ir_frame_digital} = digitalRead(${value_digital_pin});
    `;
    return code;
  };