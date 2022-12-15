import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useProfileStore = defineStore("profile", {
    state: () => ({
        profile: null,
    }),
    actions: {
        async fetchProfile() {
            const { data: profile } = await supabase
                .from('formAccount')
                .select('*')
                .order("id", { ascending: false });
            console.log(profile)
            this.profile = profile;
            return this.profile;
        },

        async addProfile(formName, formFamilyName, formProfileAge, formAdress,formZipcode, formLocation) {
            const { data, error } = await supabase.from('formAccount').insert([
                {
                    formName: formName,
                    formFamilyName: formFamilyName,
                    formProfileAge: null,
                    formAdress: formAdress,
                    formZipcode: null,
                    formLocation: formLocation,
                },
            ])
        },
            
      




    }

   
});

