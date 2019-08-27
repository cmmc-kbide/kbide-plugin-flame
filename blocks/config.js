module.exports = [
    {
        name: "KY-026 FLAME SENSOR MODULE",
        blocks: [
            {
              xml: `<block type="flame_block">
                            <value name="ANALOG_PIN">
                                <shadow type="math_number">
                                    <field name="NUM"></field>
                                </shadow>
                            </value>
                            <value name="DIGITAL_PIN">
                                <shadow type="math_number">
                                    <field name="NUM"></field>
                                </shadow>
                            </value>
                        </block>`
            }
        ]
    }
];