<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Exception as GlobalException;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  Illuminate\Http\Request $request
     * @return response
     */
    protected function create(Request $request)
    {
        $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        $cin_image_path = null ;
        if($request->FileData){
            $out->writeln($request->FileData->extension());
            $fileName = time() . '.' . $request->FileData->extension();
            $request->file('FileData')->storeAs(
                'CinImages',
                $fileName,
                'public'
            );
            $cin_image_path = 'CinImages/'.$fileName;
        }
        $user = User::create([
            'name'              => $request->name,
            'prenom'            => $request->prenom,
            'date_naissance'    => $request->date_naissance,
            'lieu_naissance'    => $request->lieu_naissance,
            'cin'               => $request->cin,
            'Tele'              => $request->Tele,
            'email'             => $request->email,
            'password'          => Hash::make($request->password),
            'cin_image_path'    => $cin_image_path,
        ]);
        try {
            Auth::loginUsingId($user->id);
            // $user->sendEmailVerificationNotification();
        } catch (GlobalException $e) {
            $out->writeln($e->getMessage());
        }
        $id = Auth::id();
        $token = $user->createToken('auth-token')->plainTextToken;
        $AuthUser = Auth::user();
        return response()->json([
            "success"=>true,
            // "message"=>"activer votre compte",
            "message"=>(__("Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.")),
            "id"=>$id,
            'AuthUser'=>$AuthUser,
            'token'=>$token
        ]);
    }
}
