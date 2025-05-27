export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      birthdays: {
        Row: {
          birthday_date: string
          created_at: string | null
          department: string | null
          employee_name: string
          id: string
          user_id: string
          wishes_count: number | null
        }
        Insert: {
          birthday_date: string
          created_at?: string | null
          department?: string | null
          employee_name: string
          id?: string
          user_id: string
          wishes_count?: number | null
        }
        Update: {
          birthday_date?: string
          created_at?: string | null
          department?: string | null
          employee_name?: string
          id?: string
          user_id?: string
          wishes_count?: number | null
        }
        Relationships: []
      }
      company_growth: {
        Row: {
          company_name: string
          created_at: string | null
          current_price: number | null
          id: string
          market_cap: number | null
          news_content: string | null
          news_title: string | null
          percentage_change: number | null
          previous_price: number | null
          reported_date: string | null
          stock_symbol: string | null
          user_id: string
        }
        Insert: {
          company_name: string
          created_at?: string | null
          current_price?: number | null
          id?: string
          market_cap?: number | null
          news_content?: string | null
          news_title?: string | null
          percentage_change?: number | null
          previous_price?: number | null
          reported_date?: string | null
          stock_symbol?: string | null
          user_id: string
        }
        Update: {
          company_name?: string
          created_at?: string | null
          current_price?: number | null
          id?: string
          market_cap?: number | null
          news_content?: string | null
          news_title?: string | null
          percentage_change?: number | null
          previous_price?: number | null
          reported_date?: string | null
          stock_symbol?: string | null
          user_id?: string
        }
        Relationships: []
      }
      employee_referrals: {
        Row: {
          company: string
          contact_email: string | null
          created_at: string | null
          deadline: string | null
          department: string | null
          experience_required: string | null
          id: string
          job_description: string | null
          job_title: string
          location: string | null
          requirements: string | null
          salary_range: string | null
          status: Database["public"]["Enums"]["referral_status"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          company: string
          contact_email?: string | null
          created_at?: string | null
          deadline?: string | null
          department?: string | null
          experience_required?: string | null
          id?: string
          job_description?: string | null
          job_title: string
          location?: string | null
          requirements?: string | null
          salary_range?: string | null
          status?: Database["public"]["Enums"]["referral_status"] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          company?: string
          contact_email?: string | null
          created_at?: string | null
          deadline?: string | null
          department?: string | null
          experience_required?: string | null
          id?: string
          job_description?: string | null
          job_title?: string
          location?: string | null
          requirements?: string | null
          salary_range?: string | null
          status?: Database["public"]["Enums"]["referral_status"] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          images: string[] | null
          is_approved: boolean | null
          metadata: Json | null
          tags: string[] | null
          title: string
          type: Database["public"]["Enums"]["post_type"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          images?: string[] | null
          is_approved?: boolean | null
          metadata?: Json | null
          tags?: string[] | null
          title: string
          type: Database["public"]["Enums"]["post_type"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          images?: string[] | null
          is_approved?: boolean | null
          metadata?: Json | null
          tags?: string[] | null
          title?: string
          type?: Database["public"]["Enums"]["post_type"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company: string | null
          created_at: string | null
          department: string | null
          designation: string | null
          email: string
          employee_id: string | null
          full_name: string
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string | null
          department?: string | null
          designation?: string | null
          email: string
          employee_id?: string | null
          full_name: string
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string | null
          department?: string | null
          designation?: string | null
          email?: string
          employee_id?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      property_listings: {
        Row: {
          area_sqft: number | null
          bathrooms: number | null
          bedrooms: number | null
          contact_details: Json | null
          created_at: string | null
          description: string | null
          id: string
          images: string[] | null
          is_active: boolean | null
          location: string | null
          price: number | null
          property_type: Database["public"]["Enums"]["property_type"]
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          area_sqft?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          contact_details?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          location?: string | null
          price?: number | null
          property_type: Database["public"]["Enums"]["property_type"]
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          area_sqft?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          contact_details?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          location?: string | null
          price?: number | null
          property_type?: Database["public"]["Enums"]["property_type"]
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      travel_plans: {
        Row: {
          contact_details: Json | null
          created_at: string | null
          current_participants: number | null
          description: string | null
          destination: string
          end_date: string | null
          estimated_cost: number | null
          id: string
          is_active: boolean | null
          max_participants: number | null
          start_date: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          contact_details?: Json | null
          created_at?: string | null
          current_participants?: number | null
          description?: string | null
          destination: string
          end_date?: string | null
          estimated_cost?: number | null
          id?: string
          is_active?: boolean | null
          max_participants?: number | null
          start_date?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          contact_details?: Json | null
          created_at?: string | null
          current_participants?: number | null
          description?: string | null
          destination?: string
          end_date?: string | null
          estimated_cost?: number | null
          id?: string
          is_active?: boolean | null
          max_participants?: number | null
          start_date?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      post_type:
        | "innovative_thought"
        | "company_event"
        | "technical_drought"
        | "work_experience"
        | "property_sale"
        | "company_growth"
        | "employee_referral"
        | "matrimonial"
        | "birthday"
        | "travel_plan"
      property_type: "sale" | "rent"
      referral_status: "open" | "closed" | "pending"
      user_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      post_type: [
        "innovative_thought",
        "company_event",
        "technical_drought",
        "work_experience",
        "property_sale",
        "company_growth",
        "employee_referral",
        "matrimonial",
        "birthday",
        "travel_plan",
      ],
      property_type: ["sale", "rent"],
      referral_status: ["open", "closed", "pending"],
      user_role: ["admin", "moderator", "user"],
    },
  },
} as const
