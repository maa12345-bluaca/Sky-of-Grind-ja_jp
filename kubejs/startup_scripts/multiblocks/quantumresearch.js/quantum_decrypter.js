
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('quantum_entanglement_decrypter')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
})




GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('quantum_entanglement_decrypter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('quantum_entanglement_decrypter')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:highly_reinforced_radioactive_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'D###D', 'D###D', 'D###D', 'D###D', 'D###D', 'CCCCC')
            .aisle('CCCCC', '#ABA#', '#ABA#', '#ABA#', '#ABA#', '#ABA#', 'CCCCC')
            .aisle('CCCCC', '#BFB#', '#BFB#', '#BFB#', '#BFB#', '#BFB#', 'CCCCC')
            .aisle('CCCCC', '#ABA#', '#ABA#', '#ABA#', '#ABA#', '#ABA#', 'CCCCC')
            .aisle('CCKCC', 'D###D', 'D###D', 'D###D', 'D###D', 'D###D', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('kubejs:fusion_glass_mk2'))
            .where('D', Predicates.blocks('gtceu:awakened_draconium_frame'))  
            .where('F', Predicates.blocks('advanced_ae:quantum_alloy_block'))
            .where('A', Predicates.blocks('kubejs:stellar_powered_casing'))
            .where("C", Predicates.blocks('kubejs:highly_reinforced_radioactive_casing')
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MAINTENANCE))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("kubejs:block/casings/highly_reinforced_radioactive_casing", 'gtceu:block/multiblock/hpca', true)

})