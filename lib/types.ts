export type UserRole = 'admin' | 'technician'

export type JobStatus = 
  | 'Waiting'
  | 'In_Progress'
  | 'Request_Continue'
  | 'Continue_Confirm'
  | 'Continue'
  | 'Completed'

export interface User {
  id: string
  email: string
  full_name: string
  role: UserRole
  created_at: string
  updated_at: string
}

export interface Job {
  id: string
  admin_id: string
  technician_id: string
  customer_name: string
  job_details: string
  start_date_time: string
  end_date_time: string | null
  status: JobStatus
  parent_job_id: string | null
  created_at: string
  updated_at: string
}

export interface ServiceLog {
  id: string
  job_id: string
  check_in_lat: number | null
  check_in_lng: number | null
  check_in_time: string | null
  check_out_lat: number | null
  check_out_lng: number | null
  check_out_time: string | null
  total_distance_km: number | null
  signature_image_url: string | null
  work_photo_url: string | null
  created_at: string
  updated_at: string
}
