ServerEvents.recipes(event => {

    // EXTRUDER
    
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:extruder', input: 'gtceu:eternity_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*200) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:extruder', input: 'gtceu:universium_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*200) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:extruder', input: 'avaritia:infinity_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*300) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:extruder', input: 'gtceu:stellar_matter_plasma_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*300) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:extruder', input: 'gtceu:pure_cosmic_matter_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*100) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })

    // BENDER

    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:bender', input: 'gtceu:eternity_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*200) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:bender', input: 'gtceu:universium_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*200) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:bender', input: 'avaritia:infinity_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*300) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:bender', input: 'gtceu:stellar_matter_plasma_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*300) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:bender', input: 'gtceu:pure_cosmic_matter_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*100) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })

    // WIREMILL

    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:wiremill', input: 'gtceu:eternity_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*200) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:wiremill', input: 'gtceu:universium_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*200) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:wiremill', input: 'avaritia:infinity_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*300) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:wiremill', input: 'gtceu:stellar_matter_plasma_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*300) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:wiremill', input: 'gtceu:pure_cosmic_matter_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*100) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    
    // LATHE

    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:lathe', input: 'gtceu:eternity_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*200) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:lathe', input: 'gtceu:universium_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*200) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:lathe', input: 'avaritia:infinity_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*300) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:lathe', input: 'gtceu:stellar_matter_plasma_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*300) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:lathe', input: 'gtceu:pure_cosmic_matter_ingot' }, recipe => { // 
        try { // 
            var newDuration = recipe.get("duration") // 
            recipe.set("duration", newDuration*100) // 
        } catch (err) { // 
            console.log(recipe.id + " has no duration field, skipped.")
        }
    })
})