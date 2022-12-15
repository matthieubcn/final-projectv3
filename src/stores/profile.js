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

        async addProfile(formName, formFamilyName, formAdress, formLocation) {
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

        async deleteProfile(user_id){
            const { data, error } = await supabase.from("formAccount").delete().match({
              user_id: user_id,
            });
      
        },
        // Function to edit profile data [full-name, website, username...]
        // async refreshProfile(username, website, fullName, id) {
        //     const { data, error } = await supabase.from('profiles').update([
        //         {
        //             username: username,
        //             website: website,
        //             full_name: fullName
        //         }
        //     ]).match({
        //         id: id,
        //     });
        // }
    }

   
});

